import React, { useEffect, useState } from 'react';
import { projectIcons } from '../assets/icons';
import { Outlet, useLocation, useParams } from "react-router";
import { Link } from 'react-router-dom';

function Profile() {
  const url = useLocation()
  console.log(url.pathname.split("/")[2]);
  const [selectTab, setSelectTab] = useState("");
  useEffect(()=>{
    setSelectTab(url.pathname.split("/")[2])
  },[])
  return (
    <div className='grid sm:grid-cols-6 p-5 gap-5'>
      <div className="account__side h-[100%] border col-span-1 rounded-lg">
        <img src={projectIcons.profileIcon} alt="" className='w-[80%] mx-auto my-5'/>
        <h1 className='text-3xl text-center'>username</h1>
      </div>
      <div className="info__side h-[83vh]  border col-span-5 rounded-lg p-5">
        <div className="account__info__links">
          <ul className='flex justify-between'>
            <li onClick={() => setSelectTab("followers")} style={selectTab === "followers" ? { textDecoration: "underline", color: "#33CDCD" } : null}><Link to="followers">Followers</Link></li>
            <li onClick={() => setSelectTab("like")} style={selectTab === "like" ? { textDecoration: "underline", color: "#33CDCD" } : null}><Link to="like">Like</Link></li>
            <li onClick={() => setSelectTab("myrecepies")} style={selectTab === "myrecepies" ? { textDecoration: "underline", color: "#33CDCD" } : null}><Link to="myrecepies">My Recepies</Link></li>
            <li onClick={() => setSelectTab("addrecepies")} style={selectTab === "addrecepies" ? { textDecoration: "underline", color: "#33CDCD" } : null}><Link to="addrecepies">Add Recepies</Link></li>
          </ul>
        </div>
        <hr  className='my-5'/>
        <Outlet/>
      </div>
    </div>
  );
}

export default Profile;
