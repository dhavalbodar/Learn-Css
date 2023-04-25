import React from "react";
import styles from "../Public/Styles/BigFeatureSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import prototypeTests from "../Public/assets/asset 1.svg";
import icon3 from "../Public/assets/asset 7.svg";
import icon5 from "../Public/assets/asset 9.svg";
import icon6 from "../Public/assets/asset 10.svg";


const BigFeaturesSection = () => {
  const featureList = [
    {
      title: "Card Sorting",
      description: "Discover how people group and label information.",
      icon: icon5,
    },
    {
      title: "Prototype tests",
      description: "Discover how people navigate your Figma prototypes.",
      icon: prototypeTests,
    },
    {
      title: "First click tests",
      description: "Test interaction with first click and navigation tests.",
      icon: icon6,
    },
    {
      title: "First click tests",
      description: "Test interaction with first click and navigation tests.",
      icon: prototypeTests,
    },
    {
      title: "First click tests",
      description: "Test interaction with first click and navigation tests.",
      icon: icon6,
    },
    {
      title: "First click tests",
      description: "Test interaction with first click and navigation tests.",
      icon: icon5,
    },
  ];
  return (
    <div className={`container ${styles["big-feature-section"]}`}>
      <div className={styles["big-feature-content"]}>
        <div className={styles["big-feature-header"]}>
          <h2>Your user research Swiss Army knife</h2>
          <a className="primary-btn" href="#">
            See all feature{" "}
            <FontAwesomeIcon
              className={styles["right-icon"]}
              icon={faArrowRight}
            />
          </a>
        </div>
        <div className={styles["big-features"]}>
          {featureList.map((feature, index) => (
            <div key={index} className={styles["feature"]}>
              <img
                src={feature.icon}
                alt=""
                className={styles["feature-icon"]}
              />
              <h2>{feature.title}</h2>
              <p className={styles['feature-description']}>{feature.description}</p>
              <a className="primary-btn" href="#">
                Learn more
                <FontAwesomeIcon
                  className={styles["right-icon"]}
                  icon={faArrowRight}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigFeaturesSection;
