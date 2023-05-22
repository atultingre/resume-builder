import React from "react";
import { ArrowDown } from "react-feather";
import ReactToPrint from "react-to-print";
import "./ResumeBuilder.css";

const ResumeBuilder = ({
  styles,
  colors,
  activeColor,
  setActiveColor,
  resumeRef,
}) => {
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
