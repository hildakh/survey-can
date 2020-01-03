import React from "react";
// import { makeStyles } from '@material-ui/core/styles';

import { IconButton} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import { useSwipeable, Swipeable } from 'react-swipeable';

let classNames = require("classnames");

export default function NextButton(props) {

  const nextButtonClass = classNames("next-button")

  return (
    <div>
      <IconButton class={nextButtonClass} id="next-question-button" label="go to next question" onClick={props.onClick}>
        <NavigateNextIcon />
      </IconButton>
      {/* <input accept="???" className={classes.input} id="icon-button-next" type="???" /> */}
    </div>
  );
}