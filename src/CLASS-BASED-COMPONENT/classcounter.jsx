import React from "react";
class Counter extends React.Component{
    constructor(){
        //if we want to call parent constructor we use super
        super();
        this.state={
            count:0
        }
    }
    componentWillMount(){
        console.log("inside component will mount");
    }
    componentDidMount(){
        console.log("i am did mount");
    }
    componentWillUpdate(){
        console.log("inside component will update");
    }
    render(){
        return(
            <>
            COUNTER CLASS
            <button onClick={()=>{this.setState({...this.state,count:this.state.count+1})}}>+</button>
            <button onClick={()=>{this.setState({...this.state,count:this.state.count-1})}}>-</button>
            <div>{this.state.count}</div>
            </>
        )
    }
}
export default Counter;