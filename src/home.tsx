import { makeStyles } from "@material-ui/styles";
import * as React from "react";
// Dynamic import will work when dynamically imported file uses default imports.
// import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  test: {},
});

const Home: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.test}>HOME</div>;
};

export default Home;
