import React from "react";
import InputControl from "../InputControl/InputControl";

const OtherBody = ({values, setValues,styles}) => {
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
