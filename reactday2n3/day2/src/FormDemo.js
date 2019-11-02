import React, {useState} from "react";
 
const NameForm = () => {
    const startState = "";
  const [name,setName] = useState(startState);
  function handleSubmit(event) {
      event.preventDefault();
      window.alert(name);
  }

  function handleChange(event) {
      const target = event.target;
      const id = target.id;
      const value = target.value;
      if(id === "name"){
          setName(value);
      }
      /* setName({value: event.target.name}) */
      
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>
          Name:
          <input id= "name" type="text" value={name} onChange={handleChange}
          placeholder = "name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
