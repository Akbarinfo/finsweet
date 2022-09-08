import React from "react";

//style
import "./Experience.scss";
import { Link } from "react-router-dom";

// images
import one from "../../../assets/images/Experience/one.jpg";
import two from "../../../assets/images/Experience/two.jpg";
import circle from "../../../assets/images/Experience/Circle.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <div className="experience__box">
          <div className="experience__left">
            <h2 className="experience__title">
              The energy of a start-up combined with 30 years of experience.
            </h2>
            <p className="experience__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>

            <ul className="experience__list">
              <li className="experience__item">
                <p className="experience__count">15+</p>
                <h3 className="experience__subtitle">Awards received</h3>
                <p className="experience__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur
                  sit amet eros elit et.
                </p>
              </li>
              <li className="experience__item">
                <p className="experience__count">500+</p>
                <h3 className="experience__subtitle">Clients served</h3>
                <p className="experience__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur
                  sit amet eros elit et.
                </p>
              </li>
            </ul>
          </div>
          <div className="experience__imgbox">
            <img className="experience__img" src={one} alt="bg" />
          </div>
          <p className="experience__circle">
            <img src={circle} alt="circle" />
          </p>
        </div>

        <div className="experience__businessbox">
          <div className="experience__btnbox">
            <button className="experience__btn experience__btn-active">
              Business strategy
            </button>
            <button className="experience__btn">Digitalization</button>
            <button className="experience__btn">Risk assessment</button>
          </div>
          <div className="experience__hbox">
            <div className="experience__helpbox">
              <h2 className="experience__title">Helping clients with research and strategy for their business</h2>
              <p className="experience__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et, mattis
                purus. Vivamus commodo suscipit tellus et pellentesque.
              </p>
              <p className="experience__text">
                Mattis purus. Vivamus commodo suscipit tellus et pellent.
                Curabitur sit amet eros blan esque.
              </p>
              <Link className="experience__link" to={"/"}>
                See all services <HiOutlineArrowNarrowRight />
              </Link>
            </div>
            <div className="experience__himgbox">
              <img className="experience__himg" src={two} alt="himg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
