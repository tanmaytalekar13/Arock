import React, { useRef, useEffect } from 'react';
import MenuRight from './MenuRight';
import MenuLeft from './MenuLeft';
import gsap from 'gsap';
import { Power3 } from 'gsap';

const Menupage = (props) => {
  const MenuRef = useRef(null);

  useEffect(() => {
    if (props.menuOpen) {
      gsap.to(MenuRef.current, {
        top: 0,
        duration: 1, // Adjust the duration as needed
        ease: Power3.easeOut // Use a GSAP built-in ease function
      });
    } else {
      gsap.to(MenuRef.current, {
        duration:2.5,
        ease: "power3.out",
        top: '100%'
      });
    }
  }, [props.menuOpen]);

  return (
    <div ref={MenuRef} className='fixed top-full h-screen w-full z-50 flex bg-[linear-gradient(#1A1A1A,#1A1A1A)]'>
      <MenuLeft />
      <MenuRight menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
    </div>
  );
}

export default Menupage;
