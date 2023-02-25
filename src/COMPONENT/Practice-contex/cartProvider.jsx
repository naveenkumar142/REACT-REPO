import { useState } from "react";
import Cart from "./cart";
import { cartContext } from "./Cart-contex";
import Item from "./item";
const CartProvider = ()=> {
    const [cart, setCart] = useState([]);
    return (
        <cartContext.Provider value={{cart : cart, updateCart:setCart}}>
             <Cart/>
            <Item/>
           
        </cartContext.Provider>
    )
}
export default CartProvider;