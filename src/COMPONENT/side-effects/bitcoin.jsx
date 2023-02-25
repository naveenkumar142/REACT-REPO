import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import loader from "./image.jpg"
const Bitcoin=()=>{
    const [bitcoin,setbitcoin]=useState(0);
    const[cryptodata,setcryptodata]=useState([]);
    //const[dummy,setdummy]=useState("");
    useEffect(()=>{
        getpricedata()
        //console.log(dummy,"dummy");
    },[])
    const getpricedata=()=>{
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((bitcoindata)=>{
            setcryptodata(Object.values(bitcoindata.data.bpi));
        }).catch(()=>{

        }).finally(()=>{
        })
    }
    getpricedata()
    return(
        <div>
            BITCOIN PRICE ACTION PRICE BUY/SELL
            <div>
            <button onClick={()=>{setbitcoin(bitcoin+1);/*setdummy("howru")*/}}>+</button>
            <button onClick={()=>{setbitcoin(bitcoin-1)}}>-</button>
            <div>QUANTITY:{bitcoin}</div>
            <table>
                <thead>
                    <tr>
                        <th>CONTRY</th>
                        <th>PRICE</th>
                        <th>DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    { !cryptodata.length &&<img src={loader} alt="loading"/>}
                    {cryptodata.length&&cryptodata.map((user,index)=>{
                        return(
                            <tr key={index}>
                                <td>{user.code}</td>
                                <td>{user.description}</td>
                                <td>{user.rate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default Bitcoin;