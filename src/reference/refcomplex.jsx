import { useRef } from "react";

const Refcomplex=()=>{
    const form=useRef({username:"",password:""})
    return(
        <div>
            <>
            <input onChange={(e)=>{form.current.username=e.target.value}}/>
            <input type="password" onChange={(e)=>{form.current.password=e.target.value}}/>
            <button onClick={()=>{console.log(form)}}>LOGIN</button>
            </>
        </div>
    )
}
export default Refcomplex;