import { makeStyles } from "@material-ui/core";
export const styles = makeStyles(() => ({
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    margin: "0 3.5%",
    maxWidth: "100%",
    height: "50%",
    alignItems: "center",
    right: "10%",
    marginTop: 14,
  },
  nomes: {
    fontWeight: "1000",
    font: "inherit",
    paddingRight: "2%",
  },
  paper: {
    display: "flex",
    width: " 34vh ",
    height: 35,
    backgroundColor: "#DCDCDC",
  },

  icon: {
    justifyContent: "flex-end",
    height: 500,
    backgroundColor: "#000000",
  },
}));
