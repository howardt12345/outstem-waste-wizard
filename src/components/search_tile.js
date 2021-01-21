import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(2, 0),
  },
  description: {
    padding: theme.spacing(1),
    textAlign: "left",
  },
  image: {
    width: 75,
    display: "flex",
    margin: "0 auto",
    padding: theme.spacing(1),
  },
  button: {
    width: 130,
    margin: theme.spacing(2),
  },
}));

const getImageURL = (category) => {
  switch (category) {
    case "Garbage":
      return "assets/garbagebin.png";
    case "Blue Bin":
      return "assets/bluebin.png";
    case "Green Bin":
      return "assets/greenbin.png";
    case "HHW":
      return "assets/hazard.png";
    case "Depot":
      return "assets/depot.png";
    case "Oversize":
      return "assets/oversize.png";
    case "Yard Waste":
      return "assets/yardwaste.png";
    case "Christmas Tree":
      return "assets/christmas-tree.png";
    case "Metal Items":
      return "assets/metal.png";
    case "Electronic Waste":
      return "assets/ewaste.png";
    default:
      return "assets/notaccepted.png";
  }
};

const decodeHTML = (text) => {
  var textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

const SearchTile = ({ data, add, isAdded }) => {
  const { id, body, category, title, keywords } = data;

  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      key={title + id}
      align="stretch"
      variant="outlined"
    >
      <Grid container spacing={1} justify="center">
        <Grid item xs={3} sm={3} style={{ maxWidth: 150 }}>
          <CardContent className={classes.content}>
            <Typography>{title}</Typography>
            <CardMedia
              component="img"
              className={classes.image}
              src={getImageURL(category)}
              title={title}
            />
            <Typography>{category}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            className={classes.description}
            style={{
              fontFamily: "roboto",
            }}
            dangerouslySetInnerHTML={{ __html: decodeHTML(body) }}
          />
        </Grid>
        <Grid
          item
          align-items-xs-center="true"
          justify-xs-flex-end="true"
        >
          <Button
            className={classes.button}
            onClick={() => add(data)}
            disabled={isAdded(data.title)}
            variant="outlined"
          >
            Add to Waste Room
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchTile;
