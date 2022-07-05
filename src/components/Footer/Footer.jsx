import React from 'react';
import "./Footer.css";
import Ctabutton from '../CtaButton/Ctabutton';
import logowhite from "../../assets/images/Group.png";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className='Footer__wrapper'>
      <div className="Footer__col1">
        <img src={logowhite} className="Footer__logo" width="200px"/>
        <div className='Footer__social'>
          <img src={facebook} className="Footer__social--icon"/>
          <img src={youtube} className="Footer__social--icon"/>
          <img src={twitter} className="Footer__social--icon"/>
          <img src={pinterest} className="Footer__social--icon"/>
          <img src={instagram} className="Footer__social--icon"/>
        </div>
       
      </div>
      <div className=" Footer__links Footer__col2">
        <a href='#' className='Footer__link--item'>About</a>
        <a href='#' className='Footer__link--item'>Contact</a>
        <a href='#' className='Footer__link--item'>Blog</a>
      </div>
      <div className="Footer__links Footer__col3">
        <a href='#' className='Footer__link--item'>Careers</a>
        <a href='#' className='Footer__link--item'>Support</a>
        <a href='#' className='Footer__link--item'>Privacy Policy</a>
      </div>
      <div className="Footer__col4">
        <Ctabutton className="Button__wrapper Footer__btn"/>
        <p className='Footer__col4--para'> © Easybank. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer