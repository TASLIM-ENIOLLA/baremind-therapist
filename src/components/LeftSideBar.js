import React, { useState } from "react";
import {
  SidebarHolder,
  Sidebar,
  LogoHolder,
  SideBarMenu
} from "../assets/styles/LeftSidebarStyle";
import {
  FaHome,
  FaBusinessTime,
  FaNotesMedical,
  FaToolbox,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import Logo from "../assets/images/baremind-logo.png";
import { Link } from "react-router-dom";

const LeftSideBar = () => {

    const [activeLink, setActiveLink] = useState();
  const activeClass = () => {
    setActiveLink(!activeLink);
  }
  
  return (
      <Sidebar>
        <LogoHolder>
          <img src={Logo} alt="baremindLogo" />
        </LogoHolder>

       

<SideBarMenu className=" all list-group" id="list-tab" role="tablist">

        <div onClick={activeClass} className={activeLink ? "sideBarList list-group-item-action active" : "sideBarList list-group-item-action"} id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
          <Link to='#'><FaHome color="#ffffff" size="15px"/> <span>Home</span></Link>
        </div>
        <div className="sideBarList list-group-item-action" id="list-schedule-list" data-bs-toggle="list" href="#list-schedule" role="tab" aria-controls="list-schedule">
          <Link to="#"><FaBusinessTime color="#ffffff" size="15px"/> <span>Schedule</span></Link>
        </div>

        <div className="sideBarList list-group-item-action" id="list-patients-list" data-bs-toggle="list" href="#list-patients" role="tab" aria-controls="list-patients">
          <Link to="#"><FaNotesMedical color="#ffffff" size="15px"/> <span>Patients</span></Link>
        </div>

        <div className="sideBarList list-group-item-action" id="list-earnings-list" data-bs-toggle="list" href="#list-earnings" role="tab" aria-controls="list-earnings">
          <Link to="#"><FaToolbox color="#ffffff" size="15px"/> <span>Earnings</span></Link>
        </div>

        <div className="sideBarList list-group-item-action" id="list-community-list" data-bs-toggle="list" href="#list-community" role="tab" aria-controls="list-community">
          <Link to="#"><FaUserAlt color="#ffffff" size="15px"/> <span>Community</span></Link>
        </div>

        <div className="sideBarList list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">
          <Link to="#"><FaUsers color="#ffffff" size="15px"/> <span>Profile</span></Link>
        </div>


        </SideBarMenu>

        </Sidebar>
  );
};

export default LeftSideBar;
