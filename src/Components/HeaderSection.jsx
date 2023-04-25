import React from "react";
import styles from '../Public/Styles/HeaderSection.module.css'
import headerImg from '../Public/assets/Home.jpg'

const HeaderSection = () => {
  return (
    <div className={`container ${styles["header-section"]}`}>
      <div className={styles["left-section"]}>
        <h1>Design Confidently.</h1>
        <p>
          UsabilityHub is a remote user research platform that takes the
          guesswork out of design decisions by validating them with real users.
        </p>
        <button className={`secondary-btn ${styles['get-started-btn']}`}>Get Started</button>
      </div>
      <div className={styles["right-section"]}>
        <img src={headerImg} alt="Header image" />
      </div>
    </div>
  );
};

export default HeaderSection;
