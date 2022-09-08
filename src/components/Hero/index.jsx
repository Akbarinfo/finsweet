import React from "react";
import { Link } from "react-router-dom";

//style
import "./Hero.scss";

//images
import logo1 from "../../assets/images/hero/Logo.svg";
import logo2 from "../../assets/images/hero/Logo-1.svg";
import logo3 from "../../assets/images/hero/Logo-2.svg";
import image from "../../assets/images/hero/image.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__bigbox">
          <div className="hero__box">
            <h1 className="hero__title">Prosper with our bespoke solutions</h1>
            <p className="hero__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="hero__btnbox">
              <button className="hero__btn">See Our Services</button>
              <Link className="hero__link" to={"/"}>
                See All Services
              </Link>
            </div>
            <p className="hero__text">Worked with 100+ Companies</p>
            <ul className="hero__list">
              <li className="hero__item">
                <img className="hero__item-img" src={logo1} alt="logo" />
              </li>
              <li className="hero__item">
                <img className="hero__item-img" src={logo2} alt="logo" />
              </li>
              <li className="hero__item">
                <img className="hero__item-img" src={logo3} alt="logo" />
              </li>
            </ul>
          </div>
          <div className="hero__imgbox">
            <img className="hero__img" src={image} alt="hero img" />
          </div>
        </div>
      </div>
    </section>
  );
}
