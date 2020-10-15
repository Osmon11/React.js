import React from "react";
import {NavLink} from "react-router-dom";
import Particles from "react-particles-js";
import "./header.css";
import telly from "../img/telly.png";
import ltelly from "../img/white-telly.png";
import dollar from "../img/1dollar.png";
import clock from "../img/clock.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/intsagram.png";
import youtube from "../img/youtube.png";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Grid, Menu, MenuItem } from "@material-ui/core";

let inputValue = React.createRef();
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

export function renderBasket(e){
    signal = true;
    if(e.target.closest(".conteiner")){
        e.target.closest(".conteiner").classList.add("show");
    };
    if(e.target.closest("#res-header")){
        console.log(e.target.closest("#res-header"))
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    },
    appBarRoot: {
        backgroundColor: 'transparent',
        padding: 0,
    },
    appBarRoot3: {
        backgroundColor: '#000000'
    },
    sellectButton: {
        width: 100 + '%',
        height: 100 + '%',
    },
    }));

const Header = (props) => {
    let classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return(
        <div className={classes.root} id="appBars">
            <AppBar className={classes.appBarRoot} position="static">
                <Toolbar className={classes.appBarRoot}>
                <div className="roof">
                    <Grid container>
                        <Grid item xs={4}>
                            <div className="roof3"><img id="roof_icon" alt="telly icon" src={telly}/><span id="roof2">Free shipping ON all order</span></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="center"><img id="roof_icon" alt="dollar icon" src={dollar}/><span id="roof2">100% MONEY BACK</span></div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="roof3"><img id="roof_icon" alt="clock icon" src={clock}/><span id="roof2">ONLINE SUPPORT 24/7</span></div>
                        </Grid>
                    </Grid>
                </div>
                </Toolbar>
            </AppBar>

            <AppBar className={classes.appBarRoot} position="static">
                <Toolbar className={classes.appBarRoot}>
                    <div className="s_input">
                        <div className="roof_search" />
                        <div className="search">
                            <div className="search-wrapper">
                                <input ref={inputValue} id="searchGoods" className="search-wrapper_input" placeholder="Search" type="text" aria-label="Поиск товаров" role="search"/>
                            </div>
                            <div className="select-box" >
                                <Button className={classes.sellectButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    Categories
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>For men</MenuItem>
                                    <MenuItem onClick={handleClose}>For women</MenuItem>
                                    <MenuItem onClick={handleClose}>For kids</MenuItem>
                                </Menu>
                            </div>
                            <div className="search-wrap-btn" onClick={searchGoods}>
                                <button type="submit" className="search-btn" id="search-btn" aria-label="Поиск товаров"></button>
                            </div>
                        </div>
                        <div className="nav_icons">
                            <span className="n_icon"><img src={facebook} alt="facebook icon"/></span>
                            <span className="n_icon"><img src={twitter} alt="twitter icon"/></span>
                            <span className="n_icon"><img src={instagram} alt="instagram icon"/></span>
                            <span className="n_icon"><img src={youtube} alt="youtube icon"/></span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

            <AppBar className={classes.appBarRoot3} position="static">
                <Toolbar>
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
                        <Grid container>
                                <Grid item xs={2} sm={2}>
                                    <NavLink className="nav_text" to="/login"><div className="nav tipicalL">Home</div></NavLink>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <NavLink className="nav_text" to="/shop"><div className="nav tipicalL">Shop</div></NavLink>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <NavLink className="nav_text" to="/features"><div className="nav tipicalL">Features</div></NavLink>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <NavLink className="nav_text" to="/about"><div className="nav tipicalL">About</div></NavLink>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <NavLink className="nav_text" to="/contact"><div className="nav tipicalL">Contact</div></NavLink>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <span className="shopping_cart tipicalL" onClick={renderBasket}><img src={ltelly} id="telly_icon" alt="light telly icon"/>   Shopping Cart (0)</span>
                                </Grid>
                            </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;