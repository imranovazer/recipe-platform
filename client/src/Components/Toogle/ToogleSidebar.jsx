import React, { useState } from 'react';
import "./Toogle.css"
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
function ToggleSidebar({ setToogleOpen, toogleOpen }) {
  const closeToogle = () => {
    setToogleOpen(false)
  }

  return (

    <div className={`sidebar absolute h-screen right-0 top-0 p-3 ${toogleOpen ? "open " : ''}`}>
      <div className="toogle__close__btn w-full flex justify-end">
        <button onClick={closeToogle} className='text-cyan-300 text-lg'><AiOutlineClose /></button>
      </div>

      <ul className=' gap-x-3 items-center justify-between'>
        <li><Link>aaaaa</Link></li>
        <li><Link>bbbbb</Link></li>
        <li><Link>ccccc</Link></li>
        <li><Link>ddddd</Link></li>
        <li><Link>eeeee</Link></li>
        <li><Link>iiiii</Link></li>
        <li><Link>ddddd</Link></li>
        <li><Link>eeeee</Link></li>
        <li><Link>iiiii</Link></li>
      </ul>
    </div>


  );
}

export default ToggleSidebar;
