import { Themecontext } from "./themecontex";
import { useContext } from "react";
const Iteminfo=()=>{
    const context=useContext(Themecontext);
    return(
        <div className={context.theme}>
            item info works!
        </div>
    )
}
export default Iteminfo;