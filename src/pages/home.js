import React, { useState, useEffect } from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";

import { Search, WasteRoom } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const HomePage = () => {
  const [wasteRoom, setWasteRoom] = useState([]);

  const classes = useStyles();

  const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link
        href="https://howardt12345.com"
        target="_blank"
        rel="nofollow noopener noreferrer" 
        color="inherit"
      >
        {`© ${new Date().getFullYear()} Howard Tseng`}
      </Link>
    </Typography>
  );

  const addToWasteRoom = (data) => {
    if (!wasteIsAdded(data.title)) {
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

  const wasteIsAdded = (title) => wasteRoom.filter((w) => w.title === title).length > 0;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Search add={addToWasteRoom} isAdded={wasteIsAdded}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <WasteRoom remove={removeFromWasteRoom} wasteRoom={wasteRoom}/>
        </Grid>
      </Grid>
      <Copyright />
    </div>
  );
};

export default HomePage;
