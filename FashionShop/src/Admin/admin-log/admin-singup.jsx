import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Particles from "react-particles-js";
import base from "./config";
import space from "../../img/image1.jpg";
import "./login.css";

const Singup = ({ history }) => {
    const handleSingup = useCallback(
        async e => {
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
        <img className="bg_space" src={space} alt="space" />
        <Particles
            className="particles-singup"
            params={{ 
            particles: { 
                number: { 
                value: 90, 
                density: { 
                    enable: true, 
                    value_area: 800, 
                } 
                },
                lineLinked: {
                    enable: true,
                    distance: 100,
                    color: "#ffffff",
                },
                size: {
                    value: 2,
                    random: false,
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                    }
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    }
                }
            }
            }} />
            <form className="box" onSubmit={handleSingup} action="index.html" method="post">
                <h1>Singup</h1>
                <input type="email" name="email" placeholder="UserEmail"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Singup"/>
            </form>
        </>
        )
}

export default withRouter(Singup);