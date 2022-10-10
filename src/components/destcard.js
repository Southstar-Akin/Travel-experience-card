import React from "react";


function Destcard(pack){
  return(
    <div className="w-[470px] h-[168px] grid grid-cols-[144px_auto]">
    <img src={pack.image} alt="Destination image" className="grid h-full w-[125px] rounded-[5px] justify-self-start "/>
    <div className="grid py-[20px] grid-rows-[10px_40px_11px_45px] gap-y-1 justify-items-start">
      <div className=" text-[10.24px] text-[#2B283A] tracking-[6.8px] before:content-location before:mr-1">
        {pack.location}  <a href={pack.googleMaplink} className="tracking-normal underline text-[#918E9B]">View on Google Maps</a>
      </div>
      <span className="font-bold text-[25px] text-[#2B283A] grid items-center">{pack.title}</span>
      <span className="font-bold text-[10.24px] text-[#2B283A] grid items-start"> {pack.startDate} - {pack.endDate}</span>
      <span className="leading-[150%] font-normal text-[10.24px] grid items-center">{pack.description}</span>
    </div>

  </div>
  )
}

export default Destcard