import React from 'react'
import { TopRight, TopRightOne, TopRightTwo } from '../../assets/styles/NavRightBarStyle'
import UserImage from "../../assets/images/user-dashboard-image.jpg";
import { AiOutlineComment } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

const NavRightBar = () => {
  return (
      <TopRight>
          <TopRightOne>
          <span className="greetingsName">Good day Alex!</span>
            <span className="welcomeMessage">Welcome back to your portal</span>
          </TopRightOne>
          <TopRightTwo>
            <div className='imageAndNameHolder'>

           
          <div className='imageHolder'>
              <img
                src={UserImage}
                alt="loginUser"
              />
            </div>
            <div className="nameHolder">
              <span className="nameOfUser">Mahlodi Letsie</span>
              <span className="country">South Africa</span>
            </div>

            </div>
            <div className='iconsHolder'>
              <AiOutlineComment color="#B2B2B2" className='iconComment' />
              <IoIosNotifications color="#B2B2B2" />
            </div>
          </TopRightTwo>
      </TopRight>
  )
}

export default NavRightBar