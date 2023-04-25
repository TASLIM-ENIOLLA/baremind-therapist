import React, { useState } from "react";
import {
  RightbarHolder,
  BottomRight,
  FirstContentHolder,
  SecondContentHolder,
  PatientStatitics,
  Figures,
  Schedule,
  PatientNo,
  ReportNo,
  ConsultationNo,
  InnerSecondContentHolder1,
  InnerSecondContentHolder2,
  TopNavHolder,
  PatientStatisticsAndCalendarHolder,
  ButtonGroup
} from "../../assets/styles/RightSideBarStyle";
import UserImage from "../../assets/images/user-dashboard-image.jpg";

import { RiFolderUserFill, RiFileUserFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import NavRightBar from "./NavRightBar";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import EventForScheduleOnHome from "../EventForScheduleOnHome";

const HomeRightBar = ({patientChartData}) => {
  // for the buttons in the Patient stat chart date on Dashboard
  const [radioValue, setRadioValue] = useState("1");
//   const [checked, setChecked] = useState(false);

  const radios = [
    { name: "Year", value: "1" },
    { name: "Month", value: "2" },
    { name: "Week", value: "3" },
  ];

  return (
    <RightbarHolder>
          <TopNavHolder>
          <NavRightBar/>
          </TopNavHolder>

          {/* bottom content starts from here */}
          <BottomRight>

            {/* first right div start here */}
                <FirstContentHolder>
                    <Figures>
                    <PatientNo className="">
                  <div className="forPatientIcon">
                    <RiFolderUserFill size="1.2em" color="#979797" />
                  </div>
                  <div className="forPatientDetails">
                    <span>Patient</span>
                    <h1>20</h1>
                    <span>Last 30 Days</span>
                  </div>
                </PatientNo>
                <ReportNo className="">
                  <div className="forReportIcon">
                    <RiFileUserFill size="1.2em" color="#979797" />
                  </div>
                  <div className="forReportDetails">
                    <span>Report</span>
                    <h1>20</h1>
                    <span>Last 30 Days</span>
                  </div>
                </ReportNo>
                <ConsultationNo className="">
                  <div className="forConsultationIcon">
                    <TiMessages size="1.2em" color="#979797" />
                  </div>
                  <div className="forConsultationNoDetails">
                    <span>Consultation</span>
                    <h1>20</h1>
                    <span>Last 30 Days</span>
                  </div>
                </ConsultationNo>
                    </Figures>

{/* the graph and the calendar starts from here */}
<PatientStatisticsAndCalendarHolder>

                    <PatientStatitics>
                    <h1>Patient statistics</h1>

<div className="patientStatGraphHolder ">
  <div className="patientStatHeader">
    <div className="patientStatHeaderDate">
      <input type="date" />
    </div>
    {/* year month week buttons start from here */}
    <div className="patientStatHeaderTime">
      <ButtonGroup>
        <button>YEAR</button>
        <button>MONTH</button>
        <button>WEEK</button>
      </ButtonGroup>
    </div>
    {/* year, motnhs , week buttons stops here */}
  </div>

  {/* patientStatHeader stopped here */}

  <div className="patientStatGraph">

    {/* patient statistics start from here */}
            <Line data={patientChartData}/>
     {/* patient statistics ends here */}
  </div>
</div>
                    </PatientStatitics>


                    {/* calendar start from here */}
                    <Schedule>
                    <div className="scheduleHeader">
                  <h1>Schedule</h1>
                  <button>
                    See All
                  </button>
                </div>

                <EventForScheduleOnHome/>
              </Schedule>
            {/* calendar ends here */}

  </PatientStatisticsAndCalendarHolder>


 {/* the graph and the calendar ends here */}

                </FirstContentHolder>
             {/* first right div ends here */}




              {/* second right div start here */}
                <SecondContentHolder>
                <InnerSecondContentHolder1>
                <div className="headers">
                  <h5>Upcoming Appointment</h5>
                  <select>
                    <option>Today</option>
                  </select>
                </div>

                <div className="upcomingAppointmentHolder">
                  <div className="upcomingApp">
                    <div className="upcomingAppContent">
                      <span style={{ color: "#787878" }}>Anxiety</span>
                      <span style={{ color: "#263238" }}>Mahlodi Letsie</span>
                      <span style={{ color: "#787878" }}>
                        08:00 AM - 09: 00 AM
                      </span>
                    </div>

                    <div className="upcomingAppIcon">
                      <a href="#">
                        <BiDotsVerticalRounded color="#787878" />
                      </a>
                    </div>
                  </div>
                  <hr />

                  <div className="upcomingApp">
                    <div className="upcomingAppContent">
                      <span style={{ color: "#787878" }}>Anxiety</span>
                      <span style={{ color: "#263238" }}>Mahlodi Letsie</span>
                      <span style={{ color: "#787878" }}>
                        08:00 AM - 09: 00 AM
                      </span>
                    </div>

                    <div className="upcomingAppIcon">
                      <a href="#">
                        <BiDotsVerticalRounded color="#787878" />
                      </a>
                    </div>
                  </div>
                  <hr />

                  <div className="upcomingApp">
                    <div className="upcomingAppContent">
                      <span style={{ color: "#787878" }}>Anxiety</span>
                      <span style={{ color: "#263238" }}>Mahlodi Letsie</span>
                      <span style={{ color: "#787878" }}>
                        08:00 AM - 09: 00 AM
                      </span>
                    </div>

                    <div className="upcomingAppIcon">
                      <a href="#">
                        <BiDotsVerticalRounded color="#787878" />
                      </a>
                    </div>
                  </div>

                  <hr />
                  <div className="upcomingApp">
                    <div className="upcomingAppContent">
                      <span style={{ color: "#787878" }}>Anxiety</span>
                      <span style={{ color: "#263238" }}>Mahlodi Letsie</span>
                      <span style={{ color: "#787878" }}>
                        08:00 AM - 09: 00 AM
                      </span>
                    </div>

                    <div className="upcomingAppIcon">
                      <a href="#">
                        <BiDotsVerticalRounded color="#787878" />
                      </a>
                    </div>
                  </div>
                </div>
              </InnerSecondContentHolder1>

              <InnerSecondContentHolder2>
                <div className="headersNotification">
                  <h5>Recent Notification</h5>
                </div>

                <div className="recentNotification">
                  <div className="recentNotHolder" >
                     <div className="recentNotDetImage">
                            <img src={UserImage} alt='notifier-img' />
                     </div>
                     <div className="recentNotDetails">
                            <span className="appointeName" style={{ fontWeight:'bolder' }}>
                              Tom Curtis
                            </span>

                            <span className="appointmentStatus" style={{ color:'#979797' }}>
                              made an appointment
                            </span>
                     </div>
                     <div className="recentNotDate">
                            <span>Thu, Sept 6 at 12pm</span>
                     </div>
                  </div>

                  <div className="recentNotHolder" >
                     <div className="recentNotDetImage">
                            <img src={UserImage} alt='notifier-img' />
                     </div>
                     <div className="recentNotDetails">
                            <span className="appointeName" style={{ fontWeight:'bolder' }}>
                              Tom Curtis
                            </span>

                            <span className="appointmentStatus" style={{ color:'#979797' }}>
                              made an appointment
                            </span>
                     </div>
                     <div className="recentNotDate">
                            <span>Thu, Sept 6 at 12pm</span>
                     </div>
                  </div>

                  <div className="recentNotHolder" >
                     <div className="recentNotDetImage">
                            <img src={UserImage} alt='notifier-img' />
                     </div>
                     <div className="recentNotDetails">
                            <span className="appointeName" style={{ fontWeight:'bolder' }}>
                              Tom Curtis
                            </span>

                            <span className="appointmentStatus" style={{ color:'#979797' }}>
                              made an appointment
                            </span>
                     </div>
                     <div className="recentNotDate">
                            <span>Thu, Sept 6 at 12pm</span>
                     </div>
                  </div>

                  <div className="recentNotHolder" >
                     <div className="recentNotDetImage">
                            <img src={UserImage} alt='notifier-img' />
                     </div>
                     <div className="recentNotDetails">
                            <span className="appointeName" style={{ fontWeight:'bolder' }}>
                              Tom Curtis
                            </span>

                            <span className="appointmentStatus" style={{ color:'#979797' }}>
                              made an appointment
                            </span>
                     </div>
                     <div className="recentNotDate">
                            <span>Thu, Sept 6 at 12pm</span>
                     </div>
                  </div>
                </div>

              </InnerSecondContentHolder2>
                </SecondContentHolder>
             {/* second right div ends here */}

            
          </BottomRight>
                    {/* bottom content ends here */}

        
    </RightbarHolder>
  );
};

export default HomeRightBar;
