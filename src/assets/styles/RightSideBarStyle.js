import styled from "styled-components";

export const RightbarHolder = styled.div`
  width: 100%;
  height: 100%;
`;

export const TopNavHolder = styled.div`
  width: 100%;
  height: 20vh;
  /* background-color: green; */
`;

export const RightSidebar = styled.div`
  /* width: 100%; 
 @media (max-width: 991px) {

      margin-left: 0;
}  */
`;


export const BottomRight = styled.div`
width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  
  /* 

  background-color: brown;
display: flex;
flex-direction: column; */
@media (max-width: 912px) and (min-width: 360px) {
 
  display: flex;
  flex-direction: column;
}
  
`;

export const FirstContentHolder = styled.div`
width: 70%;
/* background-color: pink; */

/* background-color: cyan; */
/* width: 100%; */
 /* width: 73%;  */
/* display: flex;
flex-direction: column; */


@media (max-width: 912px) and (min-width: 360px) {
 width: 100%;
  
}

`;
export const Figures = styled.div`
width: 95%;
min-height: 20vh;
background-color: #4a5ac0;
display: flex;
border-radius: 10px;
justify-content: space-around;

  /* width: 100%;
  min-height: 20vh;
  background-color: #4a5ac0;
  border-radius: 10px;
  align-self: center; */

  @media (max-width: 912px) and (min-width: 360px) {
    /* 
    height: 5vh;
    z-index: 1; */
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
}

`;



// for number of users
// numbers of report and consultation

export const PatientNo = styled.div`
  min-height: 100%;
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .forPatientIcon {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .forPatientDetails {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
 

    span {
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      /* identical to box height, or 162% */

      color: #ffffff;
    }

    h1 {
      font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 26px;
padding-top: 5px;
      /* identical to box height, or 72% */

      color: #ffffff;
    }
  }

  @media (max-width: 912px) and (min-width: 360px) {
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #4A5AC0;
     background: rgba(9, 207, 131, 0.1);
    border-radius: 5px;
    width: 100%;

    .forPatientDetails{
      padding: 0.7em;
    }
    .forPatientDetails span {
      color:#4A5AC0;
    }

    .forPatientDetails h1 {
      color:#4A5AC0;
      padding-top: 0.3em;
    }

    .forPatientIcon{
      background-color: #4A5AC0;
    }
  }


`;

export const ReportNo = styled.div`
 min-height: 100%;
 width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .forReportIcon {
      width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .forReportDetails {
    display: flex;
    flex-direction: column;

    span {
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      /* identical to box height, or 162% */

      color: #ffffff;
    }

    h1 {
      font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 26px;
      /* identical to box height, or 72% */
      padding-top: 5px;

      color: #ffffff;
    }
  }

  @media (max-width: 912px) and (min-width: 360px) {
    justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #4A5AC0; 
    background: rgba(9, 207, 131, 0.1);
     border-radius: 5px;
    width: 100%;

    .forReportDetails{
      padding: 0.7em;
    }
    .forReportDetails span {
      color:#4A5AC0;
    }

    .forReportDetails h1 {
      color:#4A5AC0;
      padding-top: 0.3em;
    }

    .forReportIcon{
      background-color: #4A5AC0;
    }
  }
`;

export const ConsultationNo = styled.div`
min-height: 100%;
   width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .forConsultationIcon {
      width: 40px;
      height: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .forConsultationNoDetails {
    display: flex;
    flex-direction: column;

    span {
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      /* identical to box height, or 162% */

      color: #ffffff;
    }

    h1 {
       font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 26px;
      /* identical to box height, or 72% */
       padding-top: 5px;

      color: #ffffff;  
    }
  }

  @media (max-width: 912px) and (min-width: 360px) {
     justify-content: space-evenly;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #4A5AC0;
    width: 100%;
    background: rgba(9, 207, 131, 0.1);

    border-radius: 5px; 

    .forConsultationNoDetails{
      padding: 0.7em;
    }
    .forConsultationNoDetails span {
      color:#4A5AC0;
    }

    .forConsultationNoDetails h1 {
      color:#4A5AC0;
      padding-top: 0.3em;
    }

    .forConsultationIcon{
      background-color: #4A5AC0;
    }
  }
`;


//patient statitics and calendar styling

export const PatientStatisticsAndCalendarHolder = styled.div`
width: 100%;
/* background-color: aqua; */
`;


// patient statistics styling start here

export const PatientStatitics = styled.div`

width: 95%;
margin-top: 20px;
/* 
margin-top:20px; */



h1{
  font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 26px; 
/* identical to box height, or 108% */

padding-bottom: 0.6em;
 color: #263238;
}

.patientStatGraphHolder {
  width: 100%;
  min-height: 350px;
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  box-sizing: border-box;
border: 1px solid #E0E0E0;
border-radius: 10px;
padding: 1.5em;
}
.patientStatGraphHolder .patientStatHeader{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.patientStatGraphHolder 
.patientStatHeader 
.patientStatHeaderDate input[type=date]{
  height: 40px;
width: 183px;
border: 1px solid #EEEEEE;
border-radius: 5px;

}



.patientStatGraphHolder 
.patientStatHeader 
.patientStatHeaderDate input[type=date]:focus{
 outline: none;
}

@media (max-width: 912px) and (min-width: 360px) {

  width: 100%;

  .patientStatGraphHolder 
.patientStatHeader 
.patientStatHeaderDate input[type=date]{
  height: 30px;
width: 120px;


}

.patientStatGraphHolder .patientStatGraph{
  margin-bottom: 80px;
}

}
`;

export const ButtonGroup = styled.div`
width: 200px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

  button{
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.005em;
color: #979797;
border: none;
background-color: transparent;

  }

  button:hover{
    background: rgba(9, 207, 131, 0.1);
border-radius: 5px;
color:#09CF83;
  }

  @media (max-width: 912px) and (min-width: 360px) {
    width: 140px;

    button{

font-size: 9px;
    }
  }
`;

// schedule starts from here
//which is calendar

export const Schedule = styled.div`
width: 95%;
/* background-color: brown; */
margin-top: 30px;
/* background: #FFFFFF; */
border: 1px solid #E0E0E0;
border-radius: 10px;
padding: 2em;

.scheduleHeader{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.scheduleHeader h1{
  font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 26px;
/* identical to box height, or 108% */


color: #263238; 
}

.scheduleHeader button{
  height: 32px;
width: 86px;
box-sizing: border-box;
border: 1px solid #09CF83;
border-radius: 5px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.005em;

color: #09CF83;
}

@media (max-width: 912px) and (min-width: 360px) {

width: 100%;
}
`;


// second content holder
export const SecondContentHolder = styled.div`
width: 28%;
/* background-color: orange; */

@media (max-width: 912px) and (min-width: 360px) {
 width: 100%;
  
}
`;

export const InnerSecondContentHolder1 = styled.div`
  width: 98%;
min-height: 386px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 


/* background: yellow; */
 border: 1px solid #EEEEEE;
box-shadow: 0px 13px 15px rgba(0, 0, 0, 0.07);
border-radius: 10px;

.headers select{ 
   width: 35%;
  appearance: none;
padding: 0.5em;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><polygon points="0,0 100,0 50,50" style="fill:%2309CF83"/></svg>');
  background-position: right 10px top 50%;
  background-repeat: no-repeat;
  background-size: 15px;
  border: none;
  margin-bottom: 1em;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.005em;

color: #787878; 
}

.headers select:focus{ 
outline: none;
}

.headers h5{
  padding: 2em 2em 0.5em 0;
}

.upcomingAppointmentHolder{
  width: 90%;
}


.upcomingApp{
  width: 100%;
  min-height: 10vh;
  border-left: 2px solid #09CF83;
  display: flex;
  justify-content:space-between;
  align-items: center;

  margin-bottom: 20px;
}

.upcomingAppContent{
  display: flex;
  flex-direction: column;
  padding-left: 0.5em;
}
@media (max-width: 912px) and (min-width: 360px) {
 width: 100%;
  
}
`;


export const InnerSecondContentHolder2 = styled.div`
  width: 98%;
  max-height: 386px;
border: none;
/* border: 1px solid #EEEEEE; */
/* box-shadow: 0px 13px 15px rgba(0, 0, 0, 0.07); 
 border-radius: 10px; */
margin-top: 23px; 

.headersNotification h5{


font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px; 
 /* identical to box height, or 144%  */

color: #263238;
padding-left: 0.8em;
padding-top: 1em; 
}

.recentNotification 
{
  width: 100%;
 
}

.recentNotification 
.recentNotHolder 
{
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'DM Sans';
  margin-bottom: 10px;
  background: #FFFFFF;
/* box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09); */
border-radius: 10px;

 
}


.recentNotification 
.recentNotHolder 
.recentNotDetImage img{
  width: 28px;
height: 28px;
  border-radius: 50%;
}


.recentNotification 
.recentNotHolder 
.recentNotDetails{
 display: flex;
 flex-direction: column;
 font-size: 0.8em;
}

.recentNotification 
.recentNotHolder 
.recentNotDate{
   font-size: 0.7em;
   color: #979797;
padding-bottom:1.7em;
}




.recentNotification 
.recentNotHolder 
.recentNotDate
.appointeName{
  color: black;
  font-weight: 500;
}

.recentNotification 
.recentNotHolder 
.recentNotDate
.appointmentStatus{
color: #979797;

}

@media (max-width: 912px) and (min-width: 360px) {
 width: 100%;
  
}
`;


