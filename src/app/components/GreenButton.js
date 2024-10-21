import * as React from "react";


const GreenButton = ({children, style}) =>{
    return (
    <button className="bg-[#43B02A] text-white px-3 py-3 hover:bg-slate-950 hover:text-white rounded-md"
    style={style}>
    {children}
      </button>
    )
}

export default GreenButton;