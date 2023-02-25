import { useState } from "react";
import { Themecontext } from "./themecontex";
const Themeprovider=(props)=>{
    const[theme,settheme]=useState("light");
    return(
        <div>
            <Themecontext.Provider value={{theme:theme,upadtetheme:settheme}}>
                {props.children}
            </Themecontext.Provider>
        </div>
    )
}
export default Themeprovider;