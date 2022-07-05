import React from 'react';
import heroImg from "../../assets/images/bg-intro-desktop.svg"
import phone from "../../assets/images/image-mockups.png";
import Ctabutton from '../CtaButton/Ctabutton';
import "./Hero.css"

const Hero = () => {
  return (
    <div className='Hero__wrapper row'>

      <div className='col-lg-6 col-md-12 Hero__content'>
        <h1 className='Hero__content--heading'>Next generation<br />digital banking</h1>
        <p className='Hero__content--para'>Take your financial life online. Your Easybank account will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.</p>
          <Ctabutton className="Button__wrapper Hero__btn"/>
      </div>
      <div className='col-lg-6 col-md-12 Hero__img'>
        <img src={phone} width="100%" className='Hero__img--phone'/>
      </div>
     

    </div>
  )
}

export default Hero