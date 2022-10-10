import React from "react";
import Navbar from "./nav";
import Destination from "./hero";

function Card(){
  return(
    <div className=" w-[550px] h-[704px] grid grid-flow-row bg-white grid-rows-[55px_auto]">
        <Navbar/>
        <Destination/>
    </div>
  )
}


export default Card