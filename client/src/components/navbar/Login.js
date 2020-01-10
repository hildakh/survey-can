import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Error from '../status/Error'
import axios from 'axios';
import fetchSurveys from '../../helpers/fetchSurveys';


export default function FormDialog(props) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    status: "PENDING",
    open: false
  })
  const [showProgress, setShowProgress] = React.useState(false)

  const fetchData = (email, password) => {
    const token = {}
    axios.post('/api/login', { email: email, password: password })
      .then((response) => {
        // handle success
        if (!response.data.user) {
          setState({ ...state, status: "ERROR" })
        } else {
          token['user'] = response.data.user
          fetchSurveys(response.data.user)
            .then((data) => {
              console.log(token)
              console.log(">>>>>data>>>>" + data)

              token['surveys'] = data;
              localStorage.setItem('token', JSON.stringify(token));
              console.log(token)

              props.login();
              handleClose();
            });
        }
      })
  }
  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false, status: "PENDING" });
  };
  const validate = () => {
    fetchData(state.email, state.password)
  }

  return (
    <div>
      <Button variant="outlined" color="default" style={{ marginLeft: '10px', marginTop: '5px', color: 'white', borderColor: 'white' }} onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        {state.status === 'ERROR' && (<div><Error message="Email or password is incorrect!" /></div>)}
        <DialogContent>
          <DialogContentText>
            Please Enter your Email and Password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(event) => setState({ ...state, email: event.target.value })}
          />
          <TextField
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            onChange={(event) => setState({ ...state, password: event.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={validate} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
