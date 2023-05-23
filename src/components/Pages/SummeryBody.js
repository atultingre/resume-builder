import React, { useContext } from 'react'
import InputControl from '../InputControl/InputControl'
import EditorContext from '../../context/EditorContext'
import styles from "../Editor/Editor.module.css";

const SummeryBody = () => {
  const {values, setValues} = useContext(EditorContext)
  return (
    <div className={styles.detail}>
        <InputControl
        label="Summary"
        value={values.summary}
        placeholder="Enter your objective/summary"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  )
}

export default SummeryBody