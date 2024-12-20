import React from 'react'

function RadioInput({name, label, options, onChange}) {
  return (
    <div className=' d-flex flex-column gap-1' >
        <label>{label}:</label>
        <div className='d-flex flex-row gap-3'>
        {options.map((option)=>(
            <label key={option} className='radio_label d-flex gap-1' >
                <input type="radio" name={name} value={option} onChange={onChange}/>
                {option}
            </label>
        ))}
        </div>
      
    </div>
  )
}

export default RadioInput