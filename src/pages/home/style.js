import { makeStyles } from "@material-ui/core";

export const styles = makeStyles(() => ({
  topo: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "3%",
    marginTop: "2%",
    backgroundColor: "#FFFFFF",
  },
  top: {
    display: "flex",
    width: "51.5%",
    height: "248px",
    backgroundColor: "#FAFAFA",
  },

  logo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    marginTop: 16,
  },
  img: {
    width: "84.5%",
    maxWidth: "100%",
  },
}));
