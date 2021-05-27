import React from "react";
import { styles } from "./style";
import Button from "@material-ui/core/Button";

export default function CardSix() {
  const classes = styles();
  return (
    <div className={classes.Contener}>
      <div className={classes.Button}>
        <Button className={classes.nome}>DISNEY</Button>
        <Button className={classes.nome}>NOVIDADES</Button>
        <Button className={classes.nome}> DISNEY FILMES</Button>
        <Button className={classes.nome}> FÉRIAS</Button>
        <Button className={classes.nome}> TV</Button>
        <Button className={classes.nome}> SÉRIES</Button>
        <Button className={classes.nome}> ANIVERSÁRIO MÁGICO</Button>
      </div>
    </div>
  );
}
