import React from "react";
import { styles } from "./style";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function CardTwo({ picture, title }) {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.stem}>
        <Card className={classes.card}>
          <CardMedia className={classes.image} image={picture} />
          <CardContent>
            <Typography className={classes.text}>{title}</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
