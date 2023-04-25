import React from "react";
import {
  RightbarHolder,
  RightSidebar,
  TopNavHolder
} from "../../assets/styles/RightSideBarStyle";
import NavRightBar from "./NavRightBar";

import {
  PatientContentHolder,
  SearchBarAndAddPatientButton,
  SearchBar,
  AddPatientButton,
  PatientsListAndHistoryHolder,
  ListOfPatients,
  PatientHistory
} from "../../assets/styles/PatientsRightBarStyle";

import { CiSearch } from "react-icons/ci";
import {FaFilter} from "react-icons/fa";

import theUserImage from "../../assets/images/user-dashboard-image.jpg";
import {IoChevronForward} from "react-icons/io5";
import {IoIosCall} from "react-icons/io";
import {BsFillCameraReelsFill} from "react-icons/bs";
import {TiLocationArrow} from "react-icons/ti";

                             

const PatientsRightBar = () => {
  return (
    <RightbarHolder >
        {/* nav started from here */}
        <TopNavHolder>
        <NavRightBar />
        </TopNavHolder>
        {/* nav ends here */}

        {/* content started from here */}
        <PatientContentHolder>
        <SearchBarAndAddPatientButton>
        <SearchBar>
              <CiSearch className="searchIcon" />{" "}
              <input type="text" placeholder="Search" />
              <button><FaFilter color="#09CF83" size='0.7em'/> Filter</button>
            </SearchBar>

            <AddPatientButton>
              <button>Add patient</button>
            </AddPatientButton>
        
        </SearchBarAndAddPatientButton>


        <PatientsListAndHistoryHolder>
        <ListOfPatients>
        <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 

                   {/* another list */}
                   <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 

                  {/* another list */}
                   <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 

                  {/* another list */}

                  <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 

                  {/* another list */}

                   <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 

                  {/* another list */}

                   <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 

                  {/* another list */}

                  <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 

                  {/* another list */}
                   <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div>

                  {/* another list */}
                   <div className="patientDetails">
                      <div className="patientImage">
                          <img src={theUserImage} alt="patient-img" />
                      </div>

                      <div className="patientNameAndNo">
                        <span className="patientName">Suzane R.</span>
                        <span className="patientNo">+233598484304</span>

                      </div>

                      <div className="symptomAndDate">
                            <span>Depression disorder</span>
                            <span>11/02/2023</span>
                      </div>

                      <div className="forwardButton">
                        <IoChevronForward color="#BEBEBE"/>
                      </div>
                  </div> 
        </ListOfPatients>
        <PatientHistory>
        <div className="fullPatientDetails">
                        <div className="detailsAboutPatient">
                            <img src={theUserImage} alt="imgOfThePatient" />

                            <div className="patientPersonalInfo">
                              <span className="fullName"> Suzane R.  </span>
                              <div className="ageAndDate">
                                <span>30 yrs, female</span>
                                <div className="divider"></div>
                                <span>Mar 14 2022</span>
                              </div>
                          
                          <span className="patAddress">Testwood, SO40 3QN, South africa</span>
                           
                            </div>

                            <div className="threeIcons">
                                  <IoIosCall color="#979797"/>
                                  <BsFillCameraReelsFill color="#979797"/>
                                  <TiLocationArrow color="#979797"/>
                            </div>
                        </div>

                        <div className="nextVisit">
                              <span>10/21</span>
                              <p>Next visit</p>
                        </div>
                    </div>

                    <span className="detailedDiagnosis ">Detailed diagnosis</span>

                    <div className="diagnosisDetails">
                          <span>Depression disorder</span>
                          <p>
                            When depression is hurting your life, such as causing 
                            trouble with relationships, work issues, or family disputes, and there isn't a clear solution to these problems, you should seek help to keep things from getting worse, 
                            especially if these feelings last for any length of time.
                            </p>
                    </div>

                    <div className="treatmentDetails">
                          <span>Treatment</span>
                          <p>Rest up to 7 hours every day, with contact with people throughout the day.</p>
                          <div className="treatmentDrugDetails">
                              <div className="drug1">
                                      <span className="drugMesurement">10G</span>
                                      <span className="drugName">Dopamine</span>
                              </div>
                              <div className="drug2">
                              <span className="drugMesurement">90MM</span>
                                      <span className="drugName">Salt restriction/day</span>
                              </div>

                              <div className="drug3">
                              <span className="drugMesurement">1.5 - 2 L</span>
                                      <span className="drugName">Nitroglycerin </span>

                              </div>
                          </div>
                    </div>

                    <div className="symptomsDetails">
                      <p>Symptoms</p>
                      <ul>
                        <li>Sadness most of the day or almost every day</li>
                        <li>Insomnia or excessive sleep</li>
                        <li>Feelings of hopelessness or worthlessness</li>
                        <li>Recurring thoughts of death or suicide, suicide plan, or suicide attempt</li>
                        <li>Problems with concentration</li>
                        <li>Fatigue or loss of energy</li>
                      </ul>

                    </div>

                    <div className="testCarriedOut">
                    <p>Test carried out </p>
                      <ul>
                        <li> The Patient Health Questionnaire-9 (PHQ-9), a nine-item</li>
                        <li>Beck Depression Inventory (BDI), a 21-question</li>
                        <li>Zung Self-Rating Depression Scale</li>
                       
                      </ul>
                    </div>

        </PatientHistory>
        </PatientsListAndHistoryHolder>
          {/* 
           


     */}
     

        </PatientContentHolder>
           {/* content ends here */}
    </RightbarHolder>
  );
};

export default PatientsRightBar;
