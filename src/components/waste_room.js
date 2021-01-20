import React, { useState, useEffect } from 'react';
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const WasteRoom = ({ add, remove }) => {


  const classes = useStyles();
  
  return (
    <Paper variant="outlined" elevation={0} className={classes.paper}>
      waste room
    </Paper>
  );
}

export default WasteRoom;