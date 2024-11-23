import React, { useState } from 'react';
import LoadingParent from './components/Loading/LoadingParent';
import Home from './components/Landing/Home';
import Menupage from './components/Menupages/Menupage';

const App = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className='h-screen bg-[#111] overflow-hidden'>
     
      <LoadingParent />
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menupage menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

    </div>
  );
}

export default App;
