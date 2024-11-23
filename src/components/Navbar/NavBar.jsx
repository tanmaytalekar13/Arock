import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
const NavBar = (props) => {
  return (
    <div className='flex items-center justify-between px-4 py-0.5'>
    <Logo/>
    <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
    </div>
  )
}

export default NavBar