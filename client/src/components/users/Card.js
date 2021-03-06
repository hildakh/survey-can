import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Spinner from '../status/Spinner';

const useStyles = makeStyles({
  card: {
    maxWidth: '50%',
    margin: '0 auto',
    marginTop: '40px',
    backgroundColor: '#AFB42B',
    '&:hover': {
      background: "#677b00",
    },
    fontFamily: 'Muli'
  },
  badge: {
    display: 'block',
    position: 'absolute',
    right: '0.5%',
    lineHeight: '16px',
    height: '16px',
    padding: '10px 12px',
    fontFamily: 'Muli',
    color: 'white',
    borderRadius: '50%',
    boxShadow: 'inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.08)',
    marginTop: '-1%',
    marginRight: '23.5%',
    backgroundColor: '#05B11F',
    color: 'white',
  },
  title: {
    marginTop: '45px',
    fontSize: 35,
    color: 'white',
    fontFamily: 'Muli'
  },
  spinner: {
    marginTop: '1%',
    color: 'white'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(true)

  setTimeout(() => {
    setProgress(false)
  }, 2000)

  return (
    <div >
      <Card className={classes.card} onClick={props.onClick}>
        {!progress && <span className={classes.badge}>{props.counter}</span>}
        <CardContent>
          {progress && <Spinner className={classes.spinner} color='secondary' />}
          {!progress && (<Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.message}
          </Typography>)}
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>

  );
}