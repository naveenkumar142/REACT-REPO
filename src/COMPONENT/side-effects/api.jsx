import axios from "axios";
const Api=()=>{
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((data)=>{
        console.log(data);
    }).catch(()=>{

    }).finally(()=>{

    })
    return(
        <div>
            for getting a data from server
        </div>
    )
}
export default Api;