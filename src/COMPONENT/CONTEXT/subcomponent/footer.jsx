import { useContext } from "react";
import { Themecontext } from "./themecontex";
const Footer=()=>{
    const context=useContext(Themecontext)
    return(
        <div className={context.theme}>
            footer works!
        </div>
    )
}
export default Footer;