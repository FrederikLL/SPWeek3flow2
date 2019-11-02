import React from 'react';
import PropTypes from 'prop-types';
import {names} from './file2';



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  Welcome.propTypes = {
    name: PropTypes.string.isRequired
  }

 /*  Welcome.defaultProps = {
    name: 44
  } */

  const person = names;
  const [{firstName,lastName,email}] = person;

  function WelcomePerson(props){
      return (
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>props.person</p>
      </div>
      )
  }
  
  export default function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Welcome />
        <Welcome name={45} />
        
        <WelcomePerson person={names[0]}  />
        <WelcomePerson person={names[1]}  />
        <WelcomePerson person={names[0]}  />
        

      </div>
    );
  }
  