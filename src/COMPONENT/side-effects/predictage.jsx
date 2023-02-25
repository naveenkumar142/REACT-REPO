import { useState } from "react"
const Predictage=()=>{
    const [name,setname]=useState("");
    const[age,setage]=useState(0);
    const handlerpredictage=()=>{
        fetch(`https://api.agify.io/?name=${name}`).then((res)=>{
            return res.json();
        }).then((data)=>{
            setage(data.age);
        }).catch(()=>{

        })
    }
    return(
        <div>
            <input onChange={(e)=>{setage(0);setname(e.target.value)}}/>
            <button onClick={handlerpredictage}>Predictage</button>
            {age &&<div>hey {name} your predicted age is {age}</div>}
        </div>
    )
}
export default Predictage;