import { useState } from "react";

const Marks=()=>{
    const[name,setname]=useState("");
    const[marks,setmarks]=useState(0);
    const [tabledata,settabledata]=useState([]);
    const handleadd=()=>{
        settabledata([...tabledata,{name:name,marks:marks}])
    }
    const handledelete=(deletevalue)=>{
        //console.log(deletevalue);
        //filter it out
        const newtabledata=tabledata.filter((data)=>{
            return data.name !== deletevalue.name
        });
        settabledata(newtabledata);
    }
    return(
        <div>
            <input value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input value={marks} onChange={(e)=>{setmarks(e.target.value)}} />
            <button onClick={handleadd}>Addrow</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((tableval,index)=>{
                        return(
                            <tr>
                                <td>{tableval.name}</td>
                                <td>{tableval.marks}</td>
                                <button onClick={()=>{handledelete(tableval)}}>Delete</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Marks;