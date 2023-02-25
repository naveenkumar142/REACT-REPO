 import { useState } from "react";
import Operation from "./operation";
const Calculator=()=>{
    const [calculated,upadtedcalculated]=useState(0)
    const [input1,setinput1]=useState("")
    const [input2,setinput2]=useState("")
    return(
        <div>
            <input type="number" onChange={(event)=>{setinput1(event.target.value)}}/>
            <input type="number" onChange={(event)=>{setinput2(event.target.value)}}/>
            <div>{calculated}</div>
            <Operation  value1={parseInt(input1)} value2={parseInt(input2)} setcalculate={upadtedcalculated}/>
        </div>
    )
}
export default Calculator;