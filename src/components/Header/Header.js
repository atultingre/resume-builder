import React from "react";
import styles from "./Header.module.css";
import resumeSvg from "../../assets/resume1.svg";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Unlock Your <span> Career </span> Potential with our{" "}
          <span>Resume Builder!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" width="640" height="360" />
      </div>
    </div>
  );
};

export default Header;
