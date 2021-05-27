import React from "react";
import { styles } from "./style";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export default function CardFive() {
  const classes = styles();
  return (
    <div className={classes.Root}>
      <div className={classes.Contener}>
        <Card className={classes.Card}>
          <CardMedia className={classes.Img} />
        </Card>
      </div>
    </div>
  );
}
