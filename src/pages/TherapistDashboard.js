import React, { useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import HomeRightBar from "../components/rightContents/HomeRightBar";
import ScheduleRightBar from "../components/rightContents/ScheduleRightBar";
import PatientsRightBar from "../components/rightContents/PatientsRightBar";
import EarningsRightBar from "../components/rightContents/EarningsRightBar";
import CommunityRightBar from "../components/rightContents/CommunityRightBar";
import ProfileRightBar from "../components/rightContents/ProfileRightBar";
import {PatientData} from '../data/HomePatientStatisticsData';
// import RightSideBar from "../components/RightSideBar";
import {DashboardContentHolder, LeftBarDashboardHolder,RightBarDashboardHolder} from '../assets/styles/TherapistDashboardStyles'



const TherapistDashboard = () => {

  //state that holds the data of the patients
  const [patientData, setPatientData] = useState({
    labels:PatientData.map((data) => data.days),
    datasets:[{
      label:"No of Patients",
      data:PatientData.map((data) => data.nosOfPatients),
      borderColor:"#09CF83"
    }]
  });

  return (
      <DashboardContentHolder className="container-fluid">
        <div className="row">

          <LeftBarDashboardHolder>
              <LeftSideBar/>
          </LeftBarDashboardHolder>

          <RightBarDashboardHolder>
          <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><HomeRightBar patientChartData={patientData} /></div>
      <div class="tab-pane fade" id="list-schedule" role="tabpanel" aria-labelledby="list-schedule-list"> <ScheduleRightBar/></div>
      <div class="tab-pane fade" id="list-patients" role="tabpanel" aria-labelledby="list-patients-list"> <PatientsRightBar/></div>
      <div class="tab-pane fade" id="list-earnings" role="tabpanel" aria-labelledby="list-earnings-list"><EarningsRightBar/></div>
      <div class="tab-pane fade" id="list-community" role="tabpanel" aria-labelledby="list-community-list"><CommunityRightBar/></div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><ProfileRightBar/></div>
    </div>
</RightBarDashboardHolder>
</div>

      </DashboardContentHolder>
  );
};

export default TherapistDashboard;
