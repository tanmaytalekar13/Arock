import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from'@gsap/react';
const LoadingChild = () => {
    const lineRef=useRef(null);
    const tl=gsap.timeline();
    useGSAP(()=>{
        tl.to(lineRef.current,{
            width:"100%",
            duration:1.3,
            delay:0.7,
            ease:"expo.out"
        })
        .to(lineRef.current,{
            opacity:0
        })
    })
  return (
    <div ref={lineRef} className='w-0 h-full bg-white rounded'>

    </div>
  )
}

export default LoadingChild