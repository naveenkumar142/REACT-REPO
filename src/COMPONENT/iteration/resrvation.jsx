import { useState } from "react";
import "./reservation.css";
const Reservation=()=>{
    const handleadditem=()=>{
        setuserlist([...userList,{name:item,age:age,category:category}]);
        setitem("")
        setage(0)
        setcategory("");
    }
    const [userList,setuserlist]=useState([])
    const [item,setitem]=useState("")
    const [age,setage]=useState(0)
    const[category,setcategory]=useState("");
    return(
        <div>
            {(age!==0 && age<18) ? <div>YOU ARE MINOR</div> :0}
            <input onChange={(event)=>{setitem(event.target.value)}} value={item}/>
            <input type="number"  onChange={(event)=>{setage(parseInt(event.target.value))}} value={age}/>
            <select onChange={(event)=>{setcategory(event.target.value)}} value={category}>
                <option>choose your option</option>
                <option value="veg">veg</option>
                <option value="non-veg">non-veg</option>
            </select>
            <button onClick={handleadditem}>Addelement</button>
            <ul>
                {userList.map((user,index)=>{
                    return(
                        <div key={index}>
                             <li>{user.name}</li>
                             <li>{user.age}</li>
                             <li className={(index.category==="veg")? "veg":"non-veg"}>{user.category}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default Reservation;