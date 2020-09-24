import React from "react";
import "./footer.css";
import logo from "../img/Store.png";
import location from "../img/lockation.png";
import mail from "../img/mail.png";
import phon from "../img/telephon.png";
import {searchGoods} from "../Header/header";

const Footer = (props) => {
    let inputValue = React.createRef();
    return(
        <footer className="footer">
            <div className="f-body">
                <div className="f-fashion">
                        <div className="logo-case">
                            <img className="footer-logo" alt="fashion_logo" src={logo}/>
                        </div>
                        <div className="fashion-text">
                            <span>Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi maximus neque, vitae finibus erat odio eu lacus. Curabitur malesuada erat eros, quis dignissim dui accumsan id. Cras non imperdiet metus. Sed nec turpis nec.</span>
                        </div>
                </div>
                <div className="f-form">
                    <div className="sing-up">
                        <h2>Sign up for our Newsletter !</h2>
                        <div className="search">
                            <div className="search-wrapper">
                                    <input ref={inputValue} id="footerSubmit" className="search-wrapper_input" placeholder="hello@psdfreebies.com" type="text" aria-label="Поиск товаров" role="search"/>
                            </div>
                            <div className="search-wrap-btn" onClick={searchGoods}>
                                    <button type="submit" className="search-btn" id="search-btn" aria-label="Поиск товаров"></button>
                            </div>
                        </div>
                    </div>
                    <div className="f-info">
                        <div className="information">
                            <span>information</span>
                            <ul>
                                <li>► Careers</li>
                                <li>► Investor Relations</li>
                                <li>► Press Releases</li>
                                <li>► Shop with Points</li>
                            </ul>
                        </div>
                        <div className="customer">
                            <span>customer care</span>
                            <ul>
                                <li>► Returns</li>
                                <li>► Shipping Info</li>
                                <li>► Gift Cards</li>
                                <li>► Size Guide</li>
                            </ul>
                        </div>
                        <div className="store">
                            <span>Store Information</span>
                            <ul>
                                <li><img src={location} alt="icon location"/>address: Lorem ipsum dolor sit amet.</li>
                                <li><img src={mail} alt="icon mail"/>email: demo@posthemes.com</li>
                                <li><img src={phon} alt="icon phon"/>phone: 0987.654.321</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-end">© 2015 Psdfreebies. All Rights Reserved</div>
        </footer>
    )
}

export default Footer;