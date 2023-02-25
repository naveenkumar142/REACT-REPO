import { useRef } from "react";
const Ref=()=>{
    const actualsrefrenece=useRef(null);
    const handlechange=()=>{
        actualsrefrenece.current.innerText="naveen"
        console.log(actualsrefrenece);
    }
    return(
        <>
        <div>I AM VIRTUAL DIV</div>
        <div ref={actualsrefrenece}>I AM ACTUAL DIV</div>
        <button onClick={handlechange}>CLICK HERE</button>
        </> 
    )
}
export default Ref;