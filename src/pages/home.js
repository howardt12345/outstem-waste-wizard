import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import 'typeface-roboto';

import { Search, WasteRoom } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const HomePage = () => {
  const [wasteRoom, setWasteRoom] = useState([]);

  const classes = useStyles();

  const addToWasteRoom = (data) => {
    if (!wasteIsAdded(data.id)) {
      let tmp = [...wasteRoom];
      tmp.push(data);
      setWasteRoom(tmp);
    }
  };
  const removeFromWasteRoom = (data) => {
    let tmp = [...wasteRoom];
    const index = tmp.indexOf(data);
    if (index > -1) tmp.splice(index, 1);
    setWasteRoom(tmp);
  };

  const wasteIsAdded = (id) => wasteRoom.filter((w) => w.id === id).length > 0;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={6}>
          <WasteRoom />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
