import React from "react";
import RadioInput from "./RadioInput";
import TextInput from "./TextInput";

function Form() {
  return (
    <div>
      <form>
        <RadioInput name="purpose_input" label="Purpose" options={["Client", "Group", "Agent"]} />
        <TextInput name="label_input" label="Label" type="text" text="Please write label to here"/>
        <TextInput name="key_input" label="Key" type="password" text="Please write key to here" />
        <RadioInput name="status_input" label="Status" options={["Active", "Passive"]}/>

        <button>Save</button>

      </form>
    </div>
  );
}

export default Form;
