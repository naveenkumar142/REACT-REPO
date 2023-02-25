import { useState } from "react"
const Forms=()=>{
    const[Forms,setForms]=useState({username:"" ,password:"" , email:""}) 
    const handlesubmit=()=>{
        console.log(Forms);
        debugger
        /*fetch({
            url:"",
            method:"Post",
            data:""
        }).then(()=>{

        }).catch(()=>{

        })*/
    }
    return(
        <div>
            <h1>Registration form</h1>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" onChange={(event)=>{setForms({...Forms,username:event.target.value})}}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={(event)=>{setForms({...Forms,email:event.target.value})}}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={(event)=>{setForms({...Forms,password:event.target.value})}}/>
                </div>
                <button type="submit" onClick={handlesubmit}>SUBMIT</button>
            </form>
        </div>
    )
}
export default Forms;