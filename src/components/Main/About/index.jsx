import React from "react";
import { Link } from "react-router-dom";

// style
import "./About.scss";

//images
import images from "../../../assets/images/MainAbout/Image.png";
import image1 from "../../../assets/images/MainAbout/Image-1.png";
import images2 from "../../../assets/images/MainAbout/Image-2.png";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"


export default function MainAbout() {
  let array = [
    {
      id: 1,
      title: "Business strategy",
      desc: "",
      images: images,
    },

    {
      id: 2,
      title: "Digitalization",
      desc: "",
      images: image1,
    },

    {
      id: 3,
      title: "Risk assessment",
      desc: "",
      images: images2,
    },
  ];

  return (
    <section className="mabout">
      <div className="container">
        <h1 className="mabout__title">
          We help more than 1500 companies from all sectors
        </h1>
        <p className="mabout__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </p>
        <ul className="mabout__list">
          {array.map((item, key) => {
            return (
              <li key={key + 789} className="mabout__item">
                <div className="mabout__imgbox">
                  <img className="mabout__img" src={item.images} alt="" />
                </div>
                <div className="mabout__box">
                  <h2 className="mabout__subtitle">{item.title}</h2>
                  <p className="mabout__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sit amet eros blandit, hendrerit elit et,
                  </p>
                  <Link className="mabout__link" to={item.id}>
                    Learn More
                    <HiOutlineArrowNarrowRight className="mabout__icon" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
