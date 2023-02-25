const Operation=(props)=>{
    const Addtion=()=>{
        props.setcalculate(props.value1+props.value2);
    }
    const Multiply=()=>{
        props.setcalculate(props.value1 *props.value2);
    }
    return(
        <div>
            <button onClick={Addtion}>ADD</button>
            <button onClick={Multiply}>multiply</button>
        </div>
    )
}
export default Operation;