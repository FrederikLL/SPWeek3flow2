import React, {useState} from "react";
 
/* function TableItem(props){
    return (
        <table>
      <thead>{props.name}</thead>
      <tbody>{props.age}</tbody>
    </table>
    );
} */

//kan se der er intet i props.members her hvilket er underligt
function MemberTable({ members }) {
    console.log(members)
  return (
    <table>
        <thead>yoink</thead>
        <tbody>{members}</tbody>
    </table>
  )
}

function MemberDemo(props) {
    console.log(props.members)
/*     console.log(props.name)
    console.log(props.age) */
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.member}/>
{/*       <table>
      <thead>{props.member}</thead>
      <tbody></tbody>
    </table> */}
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return <MemberDemo members={members} />;
}
