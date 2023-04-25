import React from "react";
import googleLogo from "../Public/assets/google.png";
import amazonLogo from "../Public/assets/amazone.png";
import taskRabbit from "../Public/assets/taskrabbit.png";
import airtableLogo from "../Public/assets/airtable.png";
import boxLogo from "../Public/assets/logo_box.png";
import asanaLogo from "../Public/assets/asana.png";
import goDaddyLogo from "../Public/assets/godaddy.svg";
import styles from '../Public/Styles/CompanyListSection.module.css'

const CompanyListSection = () => {
  const companyLogoList = [
    amazonLogo,
    googleLogo,
    taskRabbit,
    airtableLogo,
    asanaLogo,
    goDaddyLogo,
  ];

  return (
    <div className={`container ${styles["company-section"]}`}>
      <div className={styles["company-header"]}>
        The world’s best companies rely on UsabilityHub to make better design
        decisions.
      </div>
      <div className={styles["company-logos"]}>
        {companyLogoList.map((logo , index) => (
          <img src={logo} alt="company" key={index} ></img>
        ))}
      </div>
    </div>
  );
};

export default CompanyListSection;
