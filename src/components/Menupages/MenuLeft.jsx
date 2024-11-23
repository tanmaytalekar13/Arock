import { Tilt } from '@jdion/tilt-react';
import React from 'react';

const MenuLeft = () => {
  return (
    <div className='w-9/12 py-10 px-28 relative h-full overflow-hidden'>
      <Tilt
        className='parent h-full w-full flex items-center justify-center relative'
      >
        <img className='absolute right-[40px] scale-[0.97] opacity-40 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="Background Image 1" />
        <img className='absolute right-[35px]  scale-[0.94] opacity-60 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="Background Image 2" />
        <img className='absolute right-[20px]  scale-[0.91] opacity-70 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="Background Image 3" />
        <img className='absolute opacity-50 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="Background Image 4" />
      </Tilt>
    </div>
  );
}

export default MenuLeft;
