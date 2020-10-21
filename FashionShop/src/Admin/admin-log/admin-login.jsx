import React, { useCallback, useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import base from "./config";
import "./login.css";
import { Alert, AlertTitle } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

const Login = ({ history }) => {
  const [open, setOpen] = useState(false);
  let message = useRef({ message: "All right!" });
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await base
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin-cs30");
      } catch (error) {
        message.current = error;
        setOpen(true);
      }
    },
    [history]
  );
  return (
    <>
      <Collapse in={open}>
        <Alert
          severity='error'
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          <strong style={{ color: "#ce1126" }}>
            {message.current.message}
          </strong>
        </Alert>
      </Collapse>
      <form
        className='boxL'
        onSubmit={handleLogin}
        action='index.html'
        method='post'
      >
        <h1>Login</h1>
        <input type='email' name='email' placeholder='UserEmail' />
        <input type='password' name='password' placeholder='Password' />
        <input type='submit' value='Login' />
      </form>
      <div className='loginFormBg' />
    </>
  );
};

export default withRouter(Login);
