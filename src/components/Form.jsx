import React, { useState } from "react";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";
import { MdOutlineSaveAlt } from "react-icons/md";

function Form() {
  const [formData, setFormData] =useState({
    purpose_input: "",
    label_input: "",
    key_input: "",
    status_input: ""
  })

  const handleInputChange = (e) =>{
     const {name, value} = e.target
     setFormData((preData)=>({
      ...preData, 
      [name]: value
     }))
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("Form Data:", formData);
    
  }


  return (
    <div className="form_container border border-light border-2 rounded-2 p-4">
      <form className=" d-flex flex-column w-100 h-100 justify-content-between " onSubmit={handleSubmit} >

        <RadioInput name="purpose_input" label="Purpose" options={["Client", "Group", "Agent"]} onChange={handleInputChange}/>
        <TextInput name="label_input" label="Label" type="text" text="Please write label to here" onChange={handleInputChange}/>
        <TextInput name="key_input" label="Key" type="password" text="Please write key to here" onChange={handleInputChange}/>
        <RadioInput name="status_input" label="Status" options={["Active", "Passive"]} onChange={handleInputChange}/>

        <button className="w-100 btn btn-success p-2 gap-1 mt-3">Save<MdOutlineSaveAlt className="hover_icon" style={{backgroundColor: "#008b00", marginLeft: "5px"}}/></button>

      </form>
    </div>
  );
}

export default Form;
