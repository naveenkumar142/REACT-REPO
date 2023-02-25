import { useContext } from "react";
import { Themecontext } from "./themecontex";
const Sidebar=()=>{
    const context=useContext(Themecontext)
    return(
        <div className={context.theme}>
            sidebar works !
        </div>
    )
}
export default Sidebar;