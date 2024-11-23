import React from 'react'
import 'remixicon/fonts/remixicon.css'
const SubHeading = () => {
  return (
    <div className='flex justify-between items-center font-[a4] opacity-90 text-[0.7vw] leading-none px-10'>
        <div className='flex uppercase items-center gap-2 '>
        <i class="ri-play-large-fill px-2.5 py-2.5 rounded-full border-[1px] font-black"></i>
        <div className='flex flex-col items-start leading-none '>
            <h3>play</h3>
            <h3>the film</h3>
        </div>
            {/* <h3 >play <br /> the film</h3> */}
        </div>
        <div className='flex gap-20 uppercase '>
       
            <h3 className='leading-none'>Creater <br /> curator</h3>
            <div className='flex flex-col items-start leading-none'>
            <h3>New york </h3> 
            <h3>los angeles</h3>
            </div>
        </div>
    </div>
  )
}

export default SubHeading