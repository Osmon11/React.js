import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Page404() {
  return (
    <Container>
      <div className='error404'>
        <div className='sky'>
          <h2>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h2>
        </div>
        <div className='field'>
          <h2>Oops...looks like you got lost</h2>
          <Link to='/'>Back to Home</Link>
        </div>
      </div>
    </Container>
  );
}
