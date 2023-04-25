import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../Public/Styles/ExamplesSection.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../Public/assets/example1.jpg";
import img2 from "../Public/assets/example2.jpg";
import img3 from "../Public/assets/example3.jpg";
import img4 from "../Public/assets/example4.jpg";

const ExamplesSection = () => {
  const exampleList = [
    {
      text: "Can users complete a task in my software interface?",
      image: img1,
    },
    {
      text: "Can users complete a task in my software interface?",
      image: img2,
    },
    {
      text: "Can users complete a task in my software interface?",
      image: img3,
    },
    {
      text: "Can users complete a task in my software interface?",
      image: img4,
    },
  ];

  return (
    <div className="example-section">
      <div className={`container`}>
        <div className={styles["example-header"]}>
          <h2>One platform, endless possibilities</h2>
          <a className="primary-btn" href="#">
            See all feature{" "}
            <FontAwesomeIcon
              className={styles["right-icon"]}
              icon={faArrowRight}
            />
          </a>
        </div>
        <div className={styles["example-cards"]}>
          {exampleList.map((data, index) => {
            return (
              // <div className={styles[`example-card`]}>
                <a className={styles[`example-card`]} href="#" style={{ backgroundImage: `url(${data.image})` }}>
                  <h3>{data.text}</h3>
                </a>
              // </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default ExamplesSection;
