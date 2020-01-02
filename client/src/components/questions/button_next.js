import React from "react";
import { makeStyles } from '@bit/mui-org.material-ui.styles';
import { Box, Container, CssBaseline, IconButton, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function NextButton() {
  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.button} aria-label="go to next question" component="span">
        <NavigateNextIcon />
      </IconButton>
      <input accept="???" className={classes.input} id="icon-button-next" type="???" />
    </div>
  );
}