import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MenuClose = (props) => {
  const MenuRef = useRef(null);
    const MenuBarClose=()=>{
       props.setMenuOpen(false);
    }
  return (
    <div onClick={MenuBarClose} ref={MenuRef} className='uppercase font-[a4] text-[0.65vw] opacity-80 cursor-pointer'>
      Close
    </div>
  );
};
export default MenuClose;
