import React from "react";
import {Navbar, Nav, Container, Form, } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Particles from "react-particles-js";
import "./header.css";
import "react-bootstrap";
import telly from "../img/telly.png";
import ltelly from "../img/white-telly.png";
import dollar from "../img/1dollar.png";
import clock from "../img/clock.png";
import logo from "../img/Store.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/intsagram.png";
import youtube from "../img/youtube.png";

let select = true,
    inputValue = React.createRef();
export let signal = true;
export const searchGoods = event => {
    event.preventDefault();
    let ePersist = event.target;

    if (inputValue.current.value.length > 0) {
        console.log(inputValue.carent.value)
    } else {
        ePersist.closest(".search").classList.add('error');
        setTimeout(() => {
            ePersist.closest(".search").classList.remove('error');
        }, 2000);
    };
};

function clickHadler(event){
    if(select){
    event.target.closest(".select-box").classList.add("open");
    select = false;
    }else{
        event.target.closest(".select-box").classList.remove("open");
        select = true;
    }
}
export function renderBasket(e){
    signal = true;
    if(e.target.closest(".conteiner")){
        e.target.closest(".conteiner").classList.add("show");
    };
    if(e.target.closest("#res-header")){
        console.log(e.target.closest("#res-header"))
    }
}

const Header = (props) =>{
    return(
        <div className="header">
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Container>
                <div className="roof">
                    <div className="roof1">
                        <div><img id="roof_icon" alt="telly icon" src={telly}/><span id="roof2">Free shipping ON all order</span></div>
                        <div className="center"><img id="roof_icon" alt="dollar icon" src={dollar}/><span id="roof2">100% MONEY BACK</span></div>
                        <div className="roof3"><img id="roof_icon" alt="clock icon" src={clock}/><span id="roof2">ONLINE SUPPORT 24/7</span></div>
                    </div>
                </div>
                <Navbar.Collapse>
                    <div className="s_input">
                        <div className="roof_search">
                            <img className="nav_logo" alt="fashion_logo" src={logo}/>
                        </div>
                        <Form className="search">
                            <div className="search-wrapper">
                                <input ref={inputValue} id="searchGoods" className="search-wrapper_input" placeholder="Search" type="text" aria-label="Поиск товаров" role="search"/>
                            </div>
                            <div className="select-box" onClick={clickHadler}>
                                <label htmlFor="select-box1" className="label select-box1">Categories</label>
                                <select id="select-box1" className="select">
                                <option className="dropItem" value="Choice 1">For men</option>
                                <option className="dropItem" value="Choice 2">For women</option>
                                <option className="dropItem" value="Choice 3">For kids</option>
                                </select>
                            </div>
                            <div className="search-wrap-btn" onClick={searchGoods}>
                                <button type="submit" className="search-btn" id="search-btn" aria-label="Поиск товаров"></button>
                            </div>
                        </Form>
                        <div className="nav_icons">
                            <span className="n_icon"><img src={facebook} alt="facebook icon"/></span>
                            <span className="n_icon"><img src={twitter} alt="twitter icon"/></span>
                            <span className="n_icon"><img src={instagram} alt="instagram icon"/></span>
                            <span className="n_icon"><img src={youtube} alt="youtube icon"/></span>
                        </div>
                    </div>
                    <>
                    <Particles
                                className="particles-header"
                                params={{ 
                                particles: { 
                                    number: { 
                                    value: 200, 
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
                                        value: 1.5,
                                        random: false,
                                      },
                                },
                                }} />
                        <Nav className="nav_bar">
                            <NavLink className="nav_text" to="/login"><div className="nav tipicalL">Home</div></NavLink>
                            <NavLink className="nav_text" to="/shop"><div className="nav tipicalL">Shop</div></NavLink>
                            <NavLink className="nav_text" to="/features"><div className="nav tipicalL">Features</div></NavLink>
                            <NavLink className="nav_text" to="/mega-group"><div className="nav tipicalL">Mega Group</div></NavLink>
                            <NavLink className="nav_text" to="/about"><div className="nav tipicalL">About</div></NavLink>
                            <NavLink className="nav_text" to="/blog"><div className="nav tipicalL">Blog</div></NavLink>
                            <NavLink className="nav_text" to="/contact"><div className="nav tipicalL">Contact</div></NavLink>
                            <span className="shopping_cart tipicalL" onClick={renderBasket}><img src={ltelly} id="telly_icon" alt="light telly icon"/>   Shopping Cart (0)</span>
                        </Nav>
                        </>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;