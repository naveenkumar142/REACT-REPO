import { useState } from "react";
const Todolist=()=>{
    const handleadditem=()=>{
        setuserlist([...userList,{name:item,age:age}]);
        setitem("")
        setage(0)
    }
    const [userList,setuserlist]=useState([])
    const [item,setitem]=useState("")
    const [age,setage]=useState(0)
    return(
        <div>
            {(age!==0 && age<18) ? <div>YOU ARE MINOR</div> :null}
            <input onChange={(event)=>{setitem(event.target.value)}} value={item}/>
            <input type="number"  onChange={(event)=>{setage(parseInt(event.target.value))}} value={age}/>
            <button onClick={handleadditem}>Addelement</button>
            <ul>
                {userList.map((user,index)=>{
                    return(
                        <div key={index}>
                             <li>{user.name}</li>
                             <li>{user.age}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default Todolist;