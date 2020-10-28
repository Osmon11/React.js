import React, { useCallback } from "react";
import user from "./img/user.png";
import lock from "./img/lock.png";
import base from "./assets/config";
import "./style.css";
import { action_1 } from "./actionCreators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

function Login({ history, auth }) {
  console.log(history);
  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await base
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin");
        auth(true);
      } catch (error) {
        alert("Логин или пароль не правильны! \n" + error.message);
      }
    },
    [history, auth]
  );
  return (
    <div className='box'>
      <div className='form'>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className='inputBx'>
            <input type='email' placeholder='UserEmail' name='email'></input>
            <img src={user} alt='icon-user'></img>
          </div>
          <div className='inputBx'>
            <input
              type='password'
              placeholder='Password'
              name='password'
            ></input>
            <img src={lock} alt='icon-lock'></img>
          </div>
          <label className='remember'>
            <input type='checkbox' />
            Remember Me
          </label>
          <div className='inputBx'>
            <input type='submit' value='Login'></input>
          </div>
        </form>
        <p>
          Foget <a href='https://google.com'>Password</a>
        </p>
        <p>
          Need an <a href='https://google.com'>Password</a>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    admin: state.reducer_1.admin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      auth: action_1,
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
