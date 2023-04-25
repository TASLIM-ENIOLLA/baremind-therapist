import React, { useState } from "react";
import {
  RightbarHolder,
  RightSidebar,
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
} from "../assets/styles/RightSideBarStyle";
import UserImage from "../assets/images/user-dashboard-image.jpg";

import { RiFolderUserFill, RiFileUserFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ReactDatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import NavRightBar from "./rightContents/NavRightBar";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Metting",
    allDay: true,
    start: new Date(2020, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2020, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2020, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

const RightSideBar = () => {
  // for the buttons in the Patient stat chart date on Dashboard
  const [radioValue, setRadioValue] = useState("1");
  const [checked, setChecked] = useState(false);

  const radios = [
    { name: "Year", value: "1" },
    { name: "Month", value: "2" },
    { name: "Week", value: "3" },
  ];

  return (
    <RightbarHolder>
      <RightSidebar>
        {/* nav started from here */}
       
        <NavRightBar/>
   
        {/* nav ends here */}

        {/* content started from here */}

        <BottomRight>
          <div className="row">
            <FirstContentHolder className="col-8 bg-secondary">
              <Figures className="d-flex justify-content-around">
                <PatientNo className="col-3">
                  <div className="forPatientIcon">
                    <RiFolderUserFill size="1.2em" color="#979797" />
                  </div>
                  <div className="forPatientDetails">
                    <span>Patient</span>
                    <h1>20</h1>
                    <span>Last 30 Days</span>
                  </div>
                </PatientNo>
                <ReportNo className="col-3">
                  <div className="forReportIcon">
                    <RiFileUserFill size="1.2em" color="#979797" />
                  </div>
                  <div className="forReportDetails">
                    <span>Report</span>
                    <h1>20</h1>
                    <span>Last 30 Days</span>
                  </div>
                </ReportNo>
                <ConsultationNo className="col-3">
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

              <PatientStatitics className="">
                <h1>Patient statistics</h1>

                <div className="patientStatGraphHolder col-12 border border-2 border-secondary rounded">
                  <div className="patientStatHeader">
                    <div className="patientStatHeaderDate">
                      <input type="date" />
                    </div>
                    {/* year month week buttons start from here */}
                    <div className="patientStatHeaderTime">
                      <ButtonGroup>
                        {radios.map((radio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={
                              idx % 2 ? "outline-success" : "outline-danger"
                            }
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                            className={
                              idx <= 3 ? "text-success" : "text-warning"
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                    {/* year, motnhs , week buttons stops here */}
                  </div>
                  <div className="patientStatGraph"></div>
                </div>
              </PatientStatitics>
              <Schedule className="bg-white">
                <div className="d-flex justify-content-between scheduleHeader" >
                  <h1>Schedule</h1>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="px-4 py-1"
                  >
                    See All
                  </Button>
                </div>

                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: "500", margin: "40px" }}
                />
              </Schedule>
            </FirstContentHolder>


            {/* second content start from here, which is the one on the right side */}
            <SecondContentHolder className="col-4">
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
          </div>
        </BottomRight>

        {/* content ends here */}
      </RightSidebar>
    </RightbarHolder>
  );
};

export default RightSideBar;
