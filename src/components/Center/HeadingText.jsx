import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const HeadingText = () => {
  const textRef = useRef(null);
  const textspanRef = useRef(null);
  useEffect(() => {
    const tl=gsap.timeline();
    if (textRef.current && textspanRef.current) {
      let clutter = "";
      const splittedText = textRef.current.textContent.split("");
      splittedText.forEach((letter) => {
        clutter += `<span className="inline-block">${letter}</span>`;
      });
      textRef.current.innerHTML = clutter;

      tl.from("h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        delay: 2.2,
      });
     
    }
  }, []);

  return (
    <div>
      <h1
        ref={textRef}
        className="tracking-tight whitespace-nowrap overflow-hidden font-[u8] leading-[18vw] text-[21vw] font-black uppercase relative mt-[2vw] px-12"
      >
        Arock
      </h1>
      <span ref={textspanRef} className="rounded-full border-4 px-[0.6vw] absolute left-[96%] top-12 font-bold text-2xl m-1">
        R
      </span>
    </div>
  );
};

export default HeadingText;
