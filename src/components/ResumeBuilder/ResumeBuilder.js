import React, { useContext } from "react";
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";
import "./ResumeBuilder.css";
import DataContext from "../../context/DataContext";
import styles from "../Body/Body.module.css";

const ResumeBuilder = () => {
  const { colors, activeColor, setActiveColor, resumeRef } =
    useContext(DataContext);
    
  return (
    <div className="resume-builder">
      <h1 className={styles.heading1}>Resume Builder</h1>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
    </div>
  );
};

export default ResumeBuilder;
