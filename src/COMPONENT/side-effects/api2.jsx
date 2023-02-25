import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
const Api2=()=>{
    const[bitcoin,setbitcoin]=useState(0);
    useEffect(()=>{
        getdat()
    },[])
    const getdat=()=>{
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((data)=>{
            console.log(data);
        }).catch(()=>{

        }).finally(()=>{

        })
    }
    getdat()
    return(
        <div>
            <button onClick={()=>{setbitcoin(bitcoin+1)}}>+</button>
            <button onClick={()=>{setbitcoin(bitcoin-1)}}>-</button>
            <div>QUANITY:{bitcoin}</div>
            <div>TO GET THE DATA FROM THE SERVER</div>
        </div>
    )
}
export default Api2;