const Iteration=()=>{
    const arr=[{firstname:"naveen" , lastname:"kumar", age:24},{firstname:"pooja",lastname:"kumari", age:24},{firstname:"aruna",lastname:"kk", age:22}]
    return(
        <div>
            <ul>
                {arr.map((user,index)=>{
                    return(
                        <div key={index}>
                            <li>{`${user.firstname} ${user.lastname}`}</li>
                            <li>{user.age}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default Iteration;