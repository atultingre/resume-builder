import React, { useContext } from "react";
import InputControl from "../InputControl/InputControl";
import EditorContext from '../../context/EditorContext'
import styles from "../Editor/Editor.module.css";

const OtherBody = () => {
  const {values, setValues} = useContext(EditorContext)
  return (
    <div>
      <div className={styles.detail}>
        <InputControl
          label="Other"
          value={values.other}
          placeholder="Enter something"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, other: event.target.value }))
          }
        />
      </div>
    </div>
  );
};

export default OtherBody;
