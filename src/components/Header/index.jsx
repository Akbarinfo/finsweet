import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//style
import "./Header.scss";

//images
import logo from "../../assets/images/logo.svg";
import {CgMenu} from "react-icons/cg"
import {BiX} from "react-icons/bi"



export default function Header() {

  let [bactive, setBactive] = useState(false)

  let btnHandler = () => {
    console.log("ishla")
    console.log(bactive)
    setBactive(!bactive)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <div className="header__logobox">
            <Link to={"/"}>
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <button onClick={btnHandler} className="header__burger">{bactive ? <BiX /> : <CgMenu />}</button>
          <div className={`header__navbox ${bactive === true ? "header__block" : ""} `}>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <NavLink className="header__link" to={"/"}>
                    About Us
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink className="header__link" to={"/"}>
                    careers
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink className="header__link" to={"/"}>
                    Services
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink className="header__link" to={"/"}>
                    Blog
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink className="header__link" to={"/"}>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button className="header__btn">Clone project</button>
          </div>
        </div>
      </div>
    </header>
  );
}
