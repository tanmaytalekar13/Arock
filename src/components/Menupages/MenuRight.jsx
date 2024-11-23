import React from 'react';
import MenuClose from './MenuClose';
import Logo from '../Navbar/Logo';
import Heading from './Heading';
import Info from './Info';

const MenuRight = (props) => {
  return (
    <div className='w-3/12 h-full'>
      <div className='py-5 px-5 relative text-right'>
        <MenuClose menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
      </div>
      <Logo />
      <Heading /> 
      <Info />
    </div>
  );
};

export default MenuRight;
