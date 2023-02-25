import { useState } from "react";
const Na=()=>{
    const[Form,setForm]=useState({username:"",emailid:"",password:"",confirmpassword:""});
    const handler=()=>{
        setForm({username:"",emailid:"",password:"",confirmpassword:""});
        alert("form submitted sucessfully");
    }
        const isdisabled=Form.username.length && Form.emailid.length && Form.password.length && Form.confirmpassword.length;
        console.log(isdisabled);
    return(
        <div>
        <form>
            <div>
                <label htmlFor="username">USERNAME:</label>
                <input type="text" id="username" onChange={(event)=>{setForm(...Form,{username:event.target.value})}} onBlur={(event)=>{}} value={Form.username}/>
            </div>
            <div>
                <label htmlFor="emailid">EMAIL-ID:</label>
                <input type="email" id="emailid" onChange={(event)=>{setForm(...Form,{emailid:event.target.value})}} onBlur={(event)=>{}} value={Form.emailid}/>
            </div>
            <div>
                <label htmlFor="password">PASSWORD:</label>
                <input type="password" id="password" onChange={(event)=>{setForm(...Form,{password:event.target.value})}} onBlur={(event)=>{}} value={Form.password}/>
            </div>
            <div>
                <label htmlFor="confirmpassword">CONFIRM-PASSWORD:</label>
                <input type="password" id="confirmpassword" onChange={(event)=>{setForm(...Form,{confirmpassword:event.target.value})}} onBlur={(event)=>{}} value={Form.confirmpassword}/>
            </div>
            <button onClick={handler} disabled={isdisabled===0?true:false}>SUBMIT</button>
            </form>
        </div>
    )
}
export default Na;