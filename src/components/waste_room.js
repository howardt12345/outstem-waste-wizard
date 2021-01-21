import React, { useState, useEffect } from "react";
import { Card, IconButton, Paper, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
  title: {
    padding: theme.spacing(1),
  },
  card: {
    padding: theme.spacing(2),
    minHeight: 150,
    margin: theme.spacing(1, 0),
    flexDirection: "column",
  },
  itemCard: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(1),
    flexDirection: "row",
    display: "inline-flex",
  },
  itemTitle: {
    margin: "auto 0",
  },
  iconButton: {},
}));
const itemVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    duration: 0.25,
  },
};

const WasteItem = ({ data, classes, remove }) => (
  <motion.div
    key={data.title + "_wasteitemdiv"}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={itemVariant}
    layout
  >
    <Card className={classes.itemCard} variant="outlined">
      <Typography className={classes.itemTitle}>{data.title}</Typography>
      <IconButton className={classes.iconButton} onClick={() => remove(data)}>
        <Close fontSize="small" />
      </IconButton>
    </Card>
  </motion.div>
);

const WasteRoom = ({ wasteRoom, remove }) => {
  const [garbage, setGarbage] = useState([]);
  const [compost, setCompost] = useState([]);
  const [recycling, setRecycling] = useState([]);
  const [hazard, setHazard] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const addToGarbage = (data) => {
      if (garbage.filter((w) => w.title === data.title).length === 0) {
        let tmp = [...garbage];
        tmp.push(data);
        setGarbage(tmp);
      }
    };
    const addToCompost = (data) => {
      if (compost.filter((w) => w.title === data.title).length === 0) {
        let tmp = [...compost];
        tmp.push(data);
        setCompost(tmp);
      }
    };
    const addToRecycling = (data) => {
      if (recycling.filter((w) => w.title === data.title).length === 0) {
        let tmp = [...recycling];
        tmp.push(data);
        setRecycling(tmp);
      }
    };
    const addToHazard = (data) => {
      if (hazard.filter((w) => w.title === data.title).length === 0) {
        let tmp = [...hazard];
        tmp.push(data);
        setHazard(tmp);
      }
    };

    wasteRoom.forEach((w) => {
      switch (w.category) {
        case "Garbage":
          addToGarbage(w);
          break;
        case "Blue Bin":
          addToRecycling(w);
          break;
        case "Green Bin":
        case "Yard Waste":
        case "Christmas Tree":
          addToCompost(w);
          break;
        default:
          addToHazard(w);
          break;
      }
    });
  }, [wasteRoom, garbage, compost, recycling, hazard]);

  const removeFromGarbage = (data) => {
    let tmp = [...garbage];
    const index = tmp.indexOf(data);
    if (index > -1) tmp.splice(index, 1);
    setGarbage(tmp);
  };

  const removeFromCompost = (data) => {
    let tmp = [...compost];
    const index = tmp.indexOf(data);
    if (index > -1) tmp.splice(index, 1);
    setCompost(tmp);
  };

  const removeFromRecycling = (data) => {
    let tmp = [...recycling];
    const index = tmp.indexOf(data);
    if (index > -1) tmp.splice(index, 1);
    setRecycling(tmp);
  };

  const removeFromHazard = (data) => {
    let tmp = [...hazard];
    const index = tmp.indexOf(data);
    if (index > -1) tmp.splice(index, 1);
    setHazard(tmp);
  };

  return (
    <Paper elevation={0} className={classes.paper}>
      <Typography className={classes.title} variant={"h4"}>
        My Waste Room
      </Typography>
      <Card className={classes.card} key="garbage" variant="outlined">
        <Typography variant={"subtitle1"}>Garbage</Typography>
        <AnimatePresence>
          {garbage.map((x) => (
            <WasteItem
              data={x}
              classes={classes}
              remove={() => {
                removeFromGarbage(x);
                remove(x);
              }}
            />
          ))}
        </AnimatePresence>
      </Card>
      <Card className={classes.card} key="compost" variant="outlined">
        <Typography variant={"subtitle1"}>Compost & Yard Waste</Typography>
        <AnimatePresence>
          {compost.map((x) => (
            <WasteItem
              data={x}
              classes={classes}
              remove={() => {
                removeFromCompost(x);
                remove(x);
              }}
            />
          ))}
        </AnimatePresence>
      </Card>
      <Card className={classes.card} key="recycling" variant="outlined">
        <Typography variant={"subtitle1"}>Recycling</Typography>
        <AnimatePresence>
          {recycling.map((x) => (
            <WasteItem
              data={x}
              classes={classes}
              remove={() => {
                removeFromRecycling(x);
                remove(x);
              }}
            />
          ))}
        </AnimatePresence>
      </Card>
      <Card className={classes.card} key="hazard" variant="outlined">
        <Typography variant={"subtitle1"}>Hazard Waste</Typography>
        <AnimatePresence>
          {hazard.map((x) => (
            <WasteItem
              data={x}
              classes={classes}
              remove={() => {
                removeFromHazard(x);
                remove(x);
              }}
            />
          ))}
        </AnimatePresence>
      </Card>
    </Paper>
  );
};

export default WasteRoom;
