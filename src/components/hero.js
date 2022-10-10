import React from "react";
import Data from "./Data";
import Destcard from "./destcard";

function Destination(){
let dataList = Data.map((pack) => {
  return (
      <Destcard
      key = {pack.id}
      {...pack}
      />
  )
})


  return(
    <div className="grid w-full h-full py-[41px] px-[40px] overflow-auto gap-y-[36px] scrollbar scrollbar-corner-fuchsia-900">
      {dataList}
    </div>
  )
}


export default Destination