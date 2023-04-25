import React from "react";
import styles from "../Public/Styles/InfoSection.module.css";
import Info1 from "../Public/assets/info1.png";
import Info2 from "../Public/assets/info2.png";
import user1 from "../Public/assets/user1.png";
import chartMogui from "../Public/assets/chartmogui.png";

const InfoSection = () => {
  return (
    <div className={styles["info-section"]}>
      <div className={`container ${styles["info-section-content"]}`}>
        <div className={styles["info1-section"]}>
          <img src={Info1} alt="Info -2" />
          <div className={styles["info1-content-section"]}>
            <p className={styles["small-header"]}>
              {" "}
              Effortless validation for{" "}
            </p>
            <h3>Design professionals</h3>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users.
            </p>
            <img className={styles["chartmogui-img"]} src={chartMogui} alt="" />
            <span>
              The navigation test is god's gift to UI designers, it probably has
              the best power-to-simplicity ratio of any software, ever.
            </span>
            <div className={styles["first-user-info"]}>
              <img src={user1} alt="" />
              <div>
                <h4>Nick Franklin</h4>
                <span>chief Executive Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
