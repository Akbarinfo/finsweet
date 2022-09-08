import React from "react";

//style
import "./Services.scss";

// images
import icon from "../../../assets/images/MainServices/Icon.svg";
import icon2 from "../../../assets/images/MainServices/Icon-1.svg";
import icon3 from "../../../assets/images/MainServices/Icon-2.svg";

export default function MainServices() {
  let array = [
    {
      id: 1,
      title: "Invoicing",
      desc: "",
      icon: icon,
    },
    {
      id: 2,
      title: "Support",
      desc: "",
      icon: icon2,
    },
    {
      id: 3,
      title: "Surveying",
      desc: "",
      icon: icon3,
    },
  ];

  return (
    <section className="mservices">
      <div className="container">
        <div className="mservices__box">
          <h1 className="mservices__title">
            We are building software solution that solves your business
            challenges
          </h1>
          <p className="mservices__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>
        <ul className="mservices__list">
          {array.map((item, key) => {
            return (
              <li key={key + 146} className="mservices__item">
                <img className="mservices__icon" src={item.icon} alt="icon" />
                <h2 className="mservices__subtitle">{item.title}</h2>
                <p className="mservices__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et,
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
