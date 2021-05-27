import React from "react";
// import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { styles } from "./style";
import Link from "@material-ui/core/Link";

export default function Header() {
  const classes = styles();
  return (
    // <AppBar className={classes.container} position="fixed">
    <div className={classes.buttons}>
      <div>
        <Link href="/toSing">
          <Button className={classes.nomes}>DISNEY</Button>
        </Link>
      </div>
      <div>
        <Button className={classes.nomes}>FILMES</Button>
      </div>
      <div>
        <Button className={classes.nomes}>TV</Button>
      </div>
      <div>
        <Button className={classes.nomes}>NOVIDADES</Button>
      </div>
      <div>
        <Button className={classes.nomes}>MAIS</Button>
      </div>
      <div>
        <div>
          <Paper component="form" className={classes.paper}>
            <IconButton className={classes.iconButton}> </IconButton>
            <InputBase className={classes.input} />
            <IconButton>
              <SearchIcon ClassName={classes.icon} />
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
    // </AppBar>
  );
}
