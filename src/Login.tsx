import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'grid',
  },
  inputWrapper: {
    margin: 'auto',
    textAlign: 'center',
  }
});

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inputWrapper}>
        <h2>Enter your gmail login & API key</h2>
        <form>
          <TextField required label="Email Address" variant="outlined" id="email"/>
            <br/><br />
          <TextField required label="Password" variant="outlined" id="password"/>
            <br/><br />
          <TextField required label="API Key" variant="outlined" id="apiKey"/>
            <br/><br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
