import React, { useState } from 'react'
import { Outlet } from "react-router";
import { projectIcons } from "../assets/icons/index.js"
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import "./mainLayout.css"
import ToggleSidebar from '../Components/Toogle/ToogleSidebar.jsx';
import { AiOutlineClose, AiOutlineCloudSync } from 'react-icons/ai';
function MainLayout() {
  const customStyles = {
    content: {
      width: "70%",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',

    },
  };

  let subtitle;
  Modal.setAppElement('#root');
  const [toogleOpen, setToogleOpen] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const toggleSidebar = () => {
    setToogleOpen(!toogleOpen);

  };

  return (
    <div className='relative w-full overflow-hidden '>
      <div className="px-5 py-6 w-full">
        <div className=" grid  grid-cols-2  md:grid-cols-3  justify-between ">
          {/************************ Nav Brand ******************************/}
          <div className="nav__brand ">
            <Link to="/" className="flex items-center">
              <img src={projectIcons.pageLogoIcon} alt="nav brand image" className='w-[30px]' />
              <span className='mx-3 font-medium'>The Art of Cooking </span>
            </Link>
          </div>
          {/************************ Nav Links ******************************/}
          <div className="nav__links hidden sm:block">
            <ul className='flex gap-x-3 items-center justify-between'>
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

          {/************************ Nav Search ******************************/}
          <div className="flex justify-end  items-center">
            <button onClick={openModal}>
              <img src={projectIcons.navSearchIcon} alt="search icon image" className='w-[30px]' />
            </button>

            <img src={projectIcons.menuBarIcon} alt="" className='w-[30px] h-[30px] mx-5 block lg:hidden' onClick={toggleSidebar} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <div className="content ">
          <div className="header">
            <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-center text-2xl'>
              <span className="text-cyan-300">Search</span>
            </h2>
            <button onClick={closeModal} className='absolute top-2 right-2'>
              <AiOutlineClose className='text-xl text-cyan-300' />
            </button>
          </div>
          <form>
            <input
              type="text"
              id="search-input"
              placeholder="Axtarış..."
              value={searchText}
              className='w-full p-3 border rounded-md mt-2'
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
          <h1 className='text-2xl my-2 mx-1 py-5 font-bold text-cyan-300'>Search</h1>
          <hr />
          <ul id="search-results" className='overflow-y-scroll h-[400px]'>
            {searchResults.map((item, index) => (
              <Link key={index} to={`/event/${item._id}`} className='p-2'>
                <li onClick={closeModal} className='p-2 w-full border-b'>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

      </Modal>
      <ToggleSidebar className="block lg:hidden" toogleOpen={toogleOpen} setToogleOpen={setToogleOpen} />
      <Outlet />
    </div>
  )
}

export default MainLayout