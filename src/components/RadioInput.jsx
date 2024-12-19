import React from 'react'

function RadioInput({name, label, options}) {
  return (
    <div>
        <label>{label}:</label>
        {options.map((option)=>(
            <label key={option} >
                <input type="radio" name={name} value={option}/>
                {option}
            </label>
        ))}
    </div>
  )
}

export default RadioInput