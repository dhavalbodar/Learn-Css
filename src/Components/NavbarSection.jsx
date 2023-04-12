import React from "react";
import styles from "../Public/Styles/NavbarSections.module.css";
import companyLogo from "../Public/assets/asset 0.png";

const NavbarSection = ({ navLinkList }) => {
  return (
    <nav className="navbar-section">
      <div className={`container ${styles["nav-main"]}`}>
        <div className={styles["company-logo"]}>
          <a href="#">
            <img src={companyLogo} alt="Company logo" />
          </a>
        </div>
        <div className={styles["nav-links"]}>
          <ul>
            {navLinkList.map((data) => {
              return (
                <li>
                  <a className={styles['hover-link']} href={data.link}>{data.label}</a>
                </li>
              );
            })}
            <li>
              <a className={styles['hover-link']} href="#">Sign in</a>
            </li>
            <li>
              <a className={styles['hover-link']} href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
