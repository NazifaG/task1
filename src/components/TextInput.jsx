import React from 'react'

function TextInput({name, label, type, text }) {
  return (
    <div>
        <label htmlFor={name}>{label}:</label>
        <input type={type} name={name} id={name}/>
        <p>{text}</p>
    </div>
  )
}

export default TextInput