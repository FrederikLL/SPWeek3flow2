import React from 'react';
import logo from './logo.svg';
import upper,{males,females} from './file2';

const Person = upper;

const {firstName, email} = Person;

const spready = [...males,...females];

const spreadyXtra = [...males,"Kurt", "Helle",...females,"Tina"];

console.log(spready);

console.log(spreadyXtra);

export default function App2(){
    return (
        <div>
            <p>{firstName}</p>
            <p>{email}</p>
        </div>
    )
}