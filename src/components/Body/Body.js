import React from "react";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";
import ResumeBuilder from "../ResumeBuilder/ResumeBuilder";
// import DataContext from "../../context/DataContext";
import { EditorProvider } from "../../context/EditorContext";

function Body() {
  // const { sections, resumeInformation, setResumeInformation } =
  //   useContext(DataContext);

  return (
    <div className={styles.container}>
      <ResumeBuilder />
      <div className={styles.main}>
        <EditorProvider>
          <Editor />
        </EditorProvider>
        <Resume />
      </div>
    </div>
  );
}

export default Body;
