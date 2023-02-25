import { useReducer } from "react";
import { act } from "react-dom/test-utils";
const Reducer=()=>{
    const reducer=(currentvalue,action)=>{
        switch(action.type)
        {
            case "increment":
                return currentvalue + 1
            case "decrement":
                return currentvalue - 1
            case "incrementbyvalue":
                return currentvalue + action.value
            default:
                return currentvalue
        }
    }
    const intialstate=0;
    const[counter,dispatch]=useReducer(reducer,intialstate)
    return(
        <div>
            <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
            <div>{counter}</div>
            <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
            <input/>
            <button onClick={()=>{dispatch({type:"increment by value",value:10})}}  >add by</button>
        </div>
    )
}
export default Reducer;