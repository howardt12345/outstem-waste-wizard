import React, { useState, useEffect } from 'react';
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Search = ({ add, remove }) => {


  const classes = useStyles();

  return (
    <Paper variant="outlined" elevation={0} className={classes.paper}>
      search
    </Paper>
  );
}

export default Search;