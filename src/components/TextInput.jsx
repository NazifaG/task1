import React from 'react'

function TextInput({name, label, type, text, onChange }) {
  return (
    <div className='d-flex flex-column gap-2'>
        <label htmlFor={name} >{label}:</label>
        <input type={type} name={name} id={name} 
        style={{border: "1px solid #a9a9a9", borderRadius: "5px", padding: "5px"}}
         onChange={onChange}/>
        <p  className='text'>{text}</p>
    </div>
  )
}

export default TextInput