import React from 'react';
const Menu = (props) => {
    const menuBarOpens = () => {
        props.setMenuOpen(true);
    }

  return (
    <div onClick={menuBarOpens} className='font-[a4] uppercase text-[0.65vw] opacity-80  cursor-pointer'>
   Menu </div>
  );
}

export default Menu;
