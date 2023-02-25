import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
const Validation2=()=>{
    const handlersubmit=(event)=>{
        event.preventDefault();
        alert("form submitted succesfully");
        setForm({username:"",emaiid:"",password:"",confirmpassword:""})
    }
    const checkerror=(type)=>{
        switch(type){
            case "username":
                if(Form.username.length >8 || Form.username.length<6){
                    seterror({...error,username:{isvalid:false ,message:"the min length should be in b/w min 6 length and  max length is 8"}})
                }
                else{
                    seterror({...error,username:{isvalid:true ,message:""}})
                }
                break;
            case "emailid":
                break;
            case "password":
                break;
            case "confirmpassword":
                break;
        }
    }
    const[Form,setForm]=useState({username:"",emaiid:"",password:"",confirmpassword:""})
    const isdisbaled=Form.username.length && Form.emaiid.length &&Form.password.length && Form.confirmpassword.length;
    console.log(isdisbaled);
    const[error,seterror]=useState({username:{isvalid:true ,message:""}},{emaiid:{isvalid:true ,message:""}},{password:{isvalid:true ,message:""}}, {confirmpassword:{isvalid:true ,message:""}})
    return(
        <div>
            <div>
                <label htmlFor="username">USERNAME:</label>
                <input type="" id="username" onChange={(event)=>{setForm({...Form,username:event.target.value})}}  onBlur={(event)=>{checkerror("username")}} value={Form.username}/>
                {!error.username.isvalid ? <div  style={{color:"red"}}>{error.username.message}</div>:null}
            </div>
            <div>
                <label htmlFor="emailid">EMAIL-ID:</label>
                <input type="email" id="emailid" onChange={(event)=>{setForm({...Form,emaiid:event.target.value})}}  onBlur={(event)=>{checkerror("emailid")}} value={Form.emaiid}/>
            </div>
            <div>
                <label htmlFor="password">PASSWORD<span style={{color:"red"}}>*</span></label>
                <input type="password" id="password" onChange={(event)=>{setForm({...Form,password:event.target.value})}}  onBlur={(event)=>{checkerror("password")}} value={Form.password}/>
            </div>
            <div>
                <label htmlFor="confirmpassword">CONFIRMPASSWORD</label>
                <input type="password" id="confirmpassword" onChange={(event)=>{setForm({...Form,confirmpassword:event.target.value})}}  onBlur={(event)=>{checkerror("confirmpassword")}} value={Form.confirmpassword}/>
            </div>
            <button type="submit" onClick={handlersubmit} disabled={isdisbaled ===0? true:false}>SUBMIT</button>
        </div>
    )
}
export default Validation2;