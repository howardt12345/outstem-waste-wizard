import React, { useState, useEffect } from "react";
import { 
  Box, 
  Button, 
  CircularProgress,
  Paper, 
  Typography 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import { useDebouncedCallback } from "use-debounce";
import { motion, AnimatePresence } from "framer-motion";

import SearchTile from "./search_tile";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    padding: theme.spacing(1),
    textAlign: "left",
  },
}));
const resultVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: i * 0.125 + 0.125,
    },
  }),
};

const Search = ({ add, isAdded }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [currentResults, setCurrentResults] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
      );
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const getResults = (q) =>
    data.filter((e) => e.keywords.toLowerCase().includes(q.toLowerCase()));

  const loadMore = () => setCurrentResults(currentResults + 5);
  const reset = () => {
    setCurrentResults(5);
  };

  const debounced = useDebouncedCallback((value) => {
    reset();
    setQuery(value);
    console.log(getResults(value));
  }, 1000);

  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography className={classes.title} variant={"h5"}>
        Search for household item
      </Typography>
      <SearchBar
        value={query}
        onChange={(e) => debounced.callback(e)}
        onCancelSearch={() => setQuery("")}
      />
      <Box m={2} />
      {!isLoading ? <div>
        <Typography>
          {`${
            getResults(query).length > 0 ? getResults(query).length : "No"
          } results found.`}
        </Typography>
        <AnimatePresence>
          {getResults(query)
            .splice(0, currentResults)
            .map((result, i) => (
              <motion.div
                key={result.title + "_motiondiv"}
                custom={i + 5 - currentResults}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={resultVariant}
              >
                <SearchTile data={result} add={add} isAdded={isAdded} />
              </motion.div>
            ))}
        </AnimatePresence>
        <Box m={2} />
        <Button onClick={loadMore} variant="outlined">
          Load More
        </Button>
      </div> : <CircularProgress />}
    </Paper>
  );
};

export default Search;
