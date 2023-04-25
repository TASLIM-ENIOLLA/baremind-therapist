import React from "react";
import {
  RightbarHolder,
  RightSidebar,
} from "../../assets/styles/RightSideBarStyle";
import NavRightBar from "./NavRightBar";

const ProfileRightBar = () => {
  return (
    <RightbarHolder>
    <RightSidebar>
      {/* nav started from here */}
      <NavRightBar />
      {/* nav ends here */}

      {/* content started from here */}
     
      {/* content ends here */}
    </RightSidebar>
  </RightbarHolder>
  )
}

export default ProfileRightBar