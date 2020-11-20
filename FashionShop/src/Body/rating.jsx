import { Rating } from "@material-ui/lab";
import React from "react";
import useStyles from "./body";

export default function CustomRating() {
  const classes = useStyles();
  return (
    <Rating
      className={classes.themeSpasing}
      placeholder='Моя оценка'
      name='half-rating'
      defaultValue={2.5}
    />
  );
}
