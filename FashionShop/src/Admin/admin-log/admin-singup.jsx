import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import base from "./config";
import space from "../../img/image1.webp";
import "./login.css";

const AdminSingup = ({ history }) => {
  const handleSingup = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await base
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/admin-cs30");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
      <img className='bg_space' src={space} alt='space' />
      <form
        className='box'
        onSubmit={handleSingup}
        action='index.html'
        method='post'
      >
        <h1>Singup</h1>
        <input type='email' name='email' placeholder='UserEmail' />
        <input type='password' name='password' placeholder='Password' />
        <input type='submit' value='Singup' />
      </form>
    </>
  );
};

export default withRouter(AdminSingup);
