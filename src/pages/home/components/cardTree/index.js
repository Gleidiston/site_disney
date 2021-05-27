import React from "react";
import { styles } from "./style";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export default function CardTree({ picture, title }) {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.image} image={picture} />
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
}
