import Item from "../item/item";
const Home=()=>{
    const itemimg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum necessitatibus, nam vel minus in facere amet molestias reiciendis. Neque et velit consectetur similique quas a eius voluptatem fugit"
    return(
        <div>
            <Item itemname="electronics" itemimg={itemimg}itemlink="bynow"/>
            <Item itemname="toys" itemimg="" itemlink="mm"/>
            <Item itemname="household" itemimg="" itemlink="jj"/>
            <Item itemname="health" itemimg="" itemlink="hh"/>
            <Item itemname="grocery" itemimg="" itemlink="yy"/>
        </div>
    )
}
export  default Home;