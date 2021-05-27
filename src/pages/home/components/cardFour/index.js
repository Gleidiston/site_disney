import React from "react";
import { styles } from "./style";
import Card from "@material-ui/core/Card";

export default function CardFour() {
  const classes = styles();
  return (
    <div className={classes.Contener}>
      <Card className={classes.Anuncio}></Card>
    </div>
  );
}
