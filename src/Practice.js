import React, { useState } from 'react'

function Practice() {
    const [value, setValue] = useState(0)
    const handleChange=()=>{
        setValue(value+2)
    }
    const handleChange2=()=>{
        setValue(value-1)
    }
  return (
    <div>
        <button onClick={handleChange2}>decrease</button>
      <h1 > {value} </h1>
      <button onClick={handleChange}>increase</button>
    </div>
  )
}
export default Practice
