import React from 'react'
import"./Header.scss";

const Header = () => {
  return (
    <div className="Header__container">
      <div className="Header__container__logo">
        <img src="./images/socialme-logo.png" alt="logo"/>
      </div>
      <div className="Header__container__menu">
        <div className="Header__container__menu__option">
          <a href="">About</a>
        </div>
        <div className="Header__container__menu__option">
          <a href="">Get Started</a>
        </div>
      </div>
      <div className="Header__container__social">
        <img src='./images/instagram.png'/>
        <img src='./images/facebook.png'/>
      </div>
    </div>
  )
}

export default Header