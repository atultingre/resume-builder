import React from 'react'
import InputControl from '../InputControl/InputControl'

const SummeryBody = ({values, setValues}) => {
  return (
    <div>
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