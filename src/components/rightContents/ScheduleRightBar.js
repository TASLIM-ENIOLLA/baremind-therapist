import React from "react";
import {
  RightbarHolder,
  RightSidebar,
} from "../../assets/styles/RightSideBarStyle";
import NavRightBar from "./NavRightBar";
import {
  ScheduleContentHolder,
  ScheduleButtons,
  ScheduleCalender,
  MonitoringSessionHolder,
} from "../../assets/styles/ScheduleRightBarStyle";

import {
  FaTimes,
  FaCalendarAlt,
  FaClock,
  FaWatchmanMonitoring,
  FaStopwatch,
  FaCalendarTimes,
  FaCalendarDay,
  FaCalendarWeek,
  FaClipboardCheck,
} from "react-icons/fa";
import {
  IoIosCalendar,
  IoIosWatch,
  IoMdCalendar,
  IoMdClock,
  IoMdWatch,
} from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import SuccessfulImage  from "../../assets/images/img-success.jpg";
import EventActivityForSchedule from "../EventActivityForSchedule";


const ScheduleRightBar = () => {
  return (
    <RightbarHolder>
      <RightSidebar>
        {/* nav started from here */}
        <NavRightBar />
        {/* nav ends here */}

        {/* content started from here */}
        <ScheduleContentHolder>
          <ScheduleButtons>
            <div className="buttonHolder">
              <button>DAY</button>
              <button>WEEK</button>
              <button>MONTH</button>
            </div>

            {/* modal button start here */}
            <div className="modalButton">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModalToggle"
              >
                Add activity
              </button>
            </div>
            {/* modal button stops here */}
          </ScheduleButtons>

          <ScheduleCalender>
            <div className="row">
              <div className="col-12" style={{ position: "relative" }}>
                {/* Modal content form starts here */}
                <div
                  class="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabindex="-1"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        {/* <h5 class="modal-title" id="exampleModalToggleLabel">
                          Modal 1
                        </h5> */}
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* form for the modal start from here */}
                      <div class="modal-body scheduleActivityForm">
                        <h3 className="text-center">Schedule a new activity</h3>
                        <form action="">
                          <div className="form-group">
                            <label htmlFor="name" className="pb-2">
                              Plan name
                            </label>
                            <input type="text" className="form-control" />
                          </div>

                          <div className="form-group inputHolderForDate mt-2">
                            <label htmlFor="date" className="pb-2">
                              Date
                            </label>
                            <input type="text" className="form-control" />
                            <FaCalendarWeek
                              className="dateIcon"
                              size="17px"
                              color="#09CF83"
                            />
                          </div>

                          <div className="startAndEndTimeInputHolder row mt-2">
                            <div className="form-group col-6 startTimeHolder ">
                              <label htmlFor="start-time" className="pb-2">
                                Start time
                              </label>
                              <input type="text" className="form-control" />

                              <FaStopwatch
                                className="startTimeIcon"
                                size="17px"
                                color="#09CF83"
                              />
                            </div>

                            <div className="form-group col-6 endTimeHolder">
                              <label htmlFor="end-time" className="pb-2">
                                End time
                              </label>
                              <input type="text" className="form-control" />
                              <FaStopwatch
                                className="endTimeIcon"
                                size="17px"
                                color="#09CF83"
                              />
                            </div>
                          </div>

                          <div className="form-group mt-2">
                            <label htmlFor="description" className="pb-2">
                              Add description ( optional)
                            </label>
                            <textarea className="form-control"></textarea>
                          </div>

                          
                        </form>
                      </div>
                      {/* div for the form stops here */}
                      <div class="modal-footer">
                      <button type="button" class="cancelButton" data-bs-dismiss="modal">Cancel</button>

                        <button
                          class="submitButton"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                          onClick="submitForm()"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="modal fade"
                  id="exampleModalToggle2"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel2"
                  tabindex="-1"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">
                          Modal 2
                        </h5> */}
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body successModal">
                        <div className="successImage">
                            <img src={SuccessfulImage} alt="img-success" />
                        </div>

                        <div className="successMessage">
                            <span className="message1">Successfully scheduled a new activity</span>
                            <span className="message2">
                              You new activity has been successfully
                               added to your schedule.

                            </span>
                        </div>

                        <div class="modalFooterSuccess">
                        <button
                          className=""
                          data-bs-dismiss="modal"
                        >
                          Back to dashboard
                        </button>
                      </div>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Modal content form ends here */}

                {/* calender content start from here */}

                <EventActivityForSchedule/>

                {/* calender content end here */}
              </div>
            </div>

            {/* monitoring session content holder start  here */}
            <MonitoringSessionHolder>
              <div className="monitoringSessionContent">
                <div className="closeIconHolder">
                  <FaTimes color="#979797" className="timesIcon" />
                </div>
                <div className="headerDateTime">
                  <h4>Monitoring session</h4>
                  <div className="theDateTime">
                    <div className="theDate">
                      <FaCalendarAlt color="#979797" size="10px" />{" "}
                      <span style={{ paddingLeft: "0.5em" }}>Thu, Sept 6</span>
                    </div>

                    <div className="theTime">
                      <FaClock
                        color="#979797"
                        size="10px"
                        style={{ marginRight: "1em" }}
                      />
                      <span>1 pm - 3 pm</span>
                    </div>
                  </div>
                </div>

                <div className="theDetails">
                  <span>Description</span>
                  <p>
                    Our digital platform allows multi-disciplinary teams to
                    bridge the gap between therapy sessions and create a more
                    inclusive model of healthcare.
                  </p>
                </div>

                <div className="theHorizontalLine">
                  <hr />
                </div>

                <div className="confirmAvailaibility">
                  <span>Confirm availability</span>
                </div>

                <div className="confirmScheduleButtonsHolder">
                  <button className="confirmButton">Confirm</button>
                  <button className="rescheduleButton">Reschedule</button>
                </div>

                <div></div>
              </div>
            </MonitoringSessionHolder>
            {/* monitoring session content holder ends here */}
          </ScheduleCalender>
        </ScheduleContentHolder>
        {/* content ends here */}
      </RightSidebar>
    </RightbarHolder>
  );
};

export default ScheduleRightBar;
