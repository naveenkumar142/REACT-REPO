import { useState } from "react";
const Formvalidation=()=>{
    const handlersubmit=(event)=>{
        event.preventDefault();
        alert("form submitted succesfully");
        setForm({username:"",emaiid:"",password:"",confirmpassword:""})
    }
    const[Form,setForm]=useState({username:"",emaiid:"",password:"",confirmpassword:""})
    const isdisbaled=Form.username.length && Form.emaiid.length &&Form.password.length && Form.confirmpassword.length;
    console.log(isdisbaled);
    return(
        <div>
            <div>
                <label htmlFor="username">USERNAME:</label>
                <input type="" id="username" onChange={(event)=>{setForm({...Form,username:event.target.value})}}  onBlur={(event)=>{}} value={Form.username}/>
            </div>
            <div>
                <label htmlFor="emailid">EMAIL-ID:</label>
                <input type="email" id="emailid" onChange={(event)=>{setForm({...Form,emaiid:event.target.value})}}  onBlur={(event)=>{}} value={Form.emaiid}/>
            </div>
            <div>
                <label htmlFor="password">PASSWORD<span style={{color:"red"}}>*</span></label>
                <input type="password" id="password" onChange={(event)=>{setForm({...Form,password:event.target.value})}}  onBlur={(event)=>{}} value={Form.password}/>
            </div>
            <div>
                <label htmlFor="confirmpassword">CONFIRMPASSWORD</label>
                <input type="password" id="confirmpassword" onChange={(event)=>{setForm({...Form,confirmpassword:event.target.value})}}  onBlur={(event)=>{}} value={Form.confirmpassword}/>
            </div>
            <button type="submit" onClick={handlersubmit} disabled={isdisbaled ===0? true:false}>SUBMIT</button>
        </div>
    )
}
export default Formvalidation;