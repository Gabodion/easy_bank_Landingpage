import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../../assets/images/logo.svg"
import Ctabutton from '../CtaButton/Ctabutton';
import hamburger from "../../assets/images/icon-hamburger.svg"
import close from "../../assets/images/icon-close.svg"



const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const Shownav = () => {
    return (
      <div className="card Nav__card">
        <div className="card-body">
          <a href="#" className="card-item">Home</a>
          <a href="#" className="card-item">About</a>
          <a href="#" className="card-item">Contact</a>
          <a href="#" className="card-item">Blog</a>
          <a href="#" className="card-item">Careers</a>
        </div>
      </div>
    )
  }
  // toggle nav
  const handleClick = () => {
    setToggle(true)
    if (toggle === true){
      setToggle(false)
    }
  }
  
  return (
    <>
    <nav>
      <div className='Nav__small'>
        <img src={logo} className='Nav__logo' />
        <img src={toggle? close: hamburger} className='Nav__toggle' onClick={handleClick} />
        {/* <i class="fas fa-bars Nav__toggle" onClick={handleClick}></i> */}
      </div>
      <ul className='Nav__links '>
        <li className='Nav__links--item'>Home</li>
        <li className='Nav__links--item'>About</li>
        <li className='Nav__links--item'>Contact</li>
        <li className='Nav__links--item'>Blog</li>
        <li className='Nav__links--item'>Careers</li>
      </ul>
       <Ctabutton className="Button__wrapper Nav__btn"/>
    </nav>
    {toggle? <Shownav/>: null }
    
    </>
  )
}

export default Navbar