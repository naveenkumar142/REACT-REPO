const Item=(props)=>{
    console.log(props);
    return(
        <div>
            <header>{props.itemname}</header>
            <section>
                <img src="" alt=""/>
            </section>
            <a href="#">{props.itemlink}</a>
        </div>
    )
}
export  default Item;