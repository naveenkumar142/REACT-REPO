import { useState } from "react";
const Counter=()=>{
    const [Count,upadteCount]=useState(0)
    const Increment=()=>{
        upadteCount((prevCount)=>{
            console.log(prevCount,"pre");
            return prevCount +1;
        })
        upadteCount((prevCount)=>{
            return prevCount +1;
        })
    }
    const Decrement=()=>{
        upadteCount(Count-1);
        console.log(Count);
    }
    return(
        <div>
            <button onClick={Increment}> +</button>
            <div>{Count}</div>
            <button onClick={Decrement}>-</button>
            <button onClick={()=>{upadteCount(Count * 2)}}>Multiply by 2</button>
        </div>
    )
}
export default Counter;