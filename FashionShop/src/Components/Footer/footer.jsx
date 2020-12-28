import React from "react";
import "./footer.css";
import logo from "../../Assets/img/Store.png";
import location from "../../Assets/img/lockation.webp";
import mail from "../../Assets/img/mail.webp";
import phon from "../../Assets/img/telephon.webp";
import { searchGoods } from "../Header/header";
import { Button, makeStyles, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sellectButton: {
    height: 100 + "%",
  },
}));

const Footer = React.memo(() => {
  const classes = useStyles();
  let inputValue = React.createRef();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <footer className='footer'>
      <div className='f-body'>
        <div className='f-fashion'>
          <div className='logo-case'>
            <img className='footer-logo' alt='fashion_logo' src={logo} />
          </div>
          <div className='fashion-text'>
            <span>
              Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
              maximus neque, vitae finibus erat odio eu lacus. Curabitur
              malesuada erat eros, quis dignissim dui accumsan id. Cras non
              imperdiet metus. Sed nec turpis nec.
            </span>
          </div>
        </div>
        <div className='f-form'>
          <div className='sing-up'>
            <h2>Sign up for our Newsletter !</h2>
            <div className='search'>
              <div className='search-wrapper'>
                <input
                  ref={inputValue}
                  id='footerSubmit'
                  className='search-wrapper_input'
                  placeholder='hello@psdfreebies.com'
                  type='text'
                  aria-label='Поиск товаров'
                  role='search'
                />
              </div>
              <div className='search-wrap-btn' onClick={searchGoods}>
                <button
                  type='submit'
                  className='search-btn'
                  id='search-btn'
                  aria-label='Поиск товаров'
                ></button>
              </div>
            </div>
          </div>
          <div className='f-info'>
            <div className='information'>
              <span>information</span>
              <ul>
                {arrUl1.map((x, i) => {
                  return (
                    <li key={x.name + i}>
                      <Button
                        className={classes.sellectButton}
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                      >
                        ►{x.name}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>{x.item1}</MenuItem>
                        <MenuItem onClick={handleClose}>{x.item2}</MenuItem>
                        <MenuItem onClick={handleClose}>{x.item3}</MenuItem>
                      </Menu>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='customer'>
              <span>customer care</span>
              <ul>
                {arrUl2.map((x, i) => {
                  return (
                    <li key={x.name + i}>
                      <Button
                        className={classes.sellectButton}
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        onClick={handleClick}
                      >
                        ►{x.name}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>{x.item1}</MenuItem>
                        <MenuItem onClick={handleClose}>{x.item2}</MenuItem>
                        <MenuItem onClick={handleClose}>{x.item3}</MenuItem>
                      </Menu>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='store'>
              <span>Store Information</span>
              <ul>
                <li>
                  <img src={location} alt='icon location' />
                  address: Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <img src={mail} alt='icon mail' />
                  email: demo@posthemes.com
                </li>
                <li>
                  <img src={phon} alt='icon phon' />
                  phone: 0987.654.321
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='f-end'>© 2015 Psdfreebies. All Rights Reserved</div>
    </footer>
  );
});

export default Footer;

const arrUl1 = [
  {
    name: "Careers",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
  {
    name: "Investor Relations",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
  {
    name: "Press Releases",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
  {
    name: "Shop with Points",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
];
const arrUl2 = [
  {
    name: "Returns",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
  {
    name: "Shipping Info",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
  {
    name: "Gift Cards",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
  {
    name: "Size Guide",
    item1: "For men",
    item2: "For women",
    item3: "For kids",
  },
];
