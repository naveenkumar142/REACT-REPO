import Counter from "../CLASS-BASED-COMPONENT/classcounter";
import Fragments from "../FRAGMENTS/fragments";
import Ref from "../reference/ref";
import Refcomplex from "../reference/refcomplex";
import CartProvider from "./Practice-contex/cartProvider";
const App=()=>{
    return(
        <div>
            <CartProvider/>
            <Fragments/>
            <Ref/>
            <Refcomplex/>
            <Counter/>
        </div>
    )
}
export default App;