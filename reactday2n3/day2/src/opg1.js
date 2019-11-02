import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Test(props){
    return props.start;
}

export default function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState({Test});

  return (
    <div>
         {/* <Example inc={4} /> */}
         <Test start={3} /> 
         {/* <Example start={3} />  */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me for +
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click me for -
      </button>
    </div>
  );
}