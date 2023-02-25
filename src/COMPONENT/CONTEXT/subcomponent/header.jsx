import { useContext } from "react";
import { Themecontext } from "./themecontex";
const Header=()=>{
    const context=useContext(Themecontext);
    const handleclick=()=>{
        if(context.theme==="light")
        {
            context.upadtetheme("dark")
        }
        else{
            context.upadtetheme("light")
        }
    }
    return(
        <div>
            <nav>
                <button onClick={handleclick}>TOGGLE THEME</button>
            </nav>
        </div>
    )
}
export default Header;