import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import AutorenewIcon from "@material-ui/icons/Autorenew";
import { FaGhost } from "react-icons/fa";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#9a0007",
    color: "white",
    fontSize: 15,
    fontFamily: "Dancing Script",
    borderRadius: 20
  }
}));

export default function Reset(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('BASIC')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //handle error
  const openError = () => {
    setStatus('ERROR')
  }
  const closeMessage = () => {
    setStatus('BASIC');
  }
  //handle success
  const openSuccess = () => {
    setStatus('SUCCESS')
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button}
        startIcon={<FaGhost />}
      >
        Reset
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reset</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Click reset if you wish to restart the survey without saving it
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={openSuccess} color="primary">
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
