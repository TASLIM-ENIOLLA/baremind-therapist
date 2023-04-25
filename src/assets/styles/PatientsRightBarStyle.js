import styled from "styled-components";

export const PatientContentHolder = styled.div`
width: 100%;
height: 100%;
/* background-color: orange; */

/* background-color: orange; */

/* min-width: 100%;
  height: 100%;
  background-color: orange;
  margin-top: 20px; */
`;

//  search bar and the add button 
//  button style starts from here

export const SearchBarAndAddPatientButton = styled.div`
 width: 100%;
height: 10vh;
 /* background-color: purple; */
 display: flex;
 justify-content: space-between;
align-items: center;
`;



export const SearchBar  = styled.div`
 position: relative;
 width: 45%;
  display: flex;
justify-content: space-between;

    input[type='text']{
        box-sizing: border-box;
 width: 350px;
 height: 48px;
 background: #FFFFFF;
 border: 1px solid #E0E0E0;
 border-radius: 5px;
 font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;
 color: #979797;
 padding-left: 2.5em;
     }

     input[type='text']:focus{
         outline: none;
     }

     .searchIcon{
        position: absolute;
        top: 1em;
         left: 0.7em;
    }

    button{
         box-sizing: border-box;
 width: 86px;
 height: 48px;
 background: #FFFFFF;
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

        width: 63%;


        input[type='text']{

            box-sizing: border-box;
 width: 150px;
 height: 38px;
        }

        button{
            width: 70px;
            height: 38px;
        }

        .searchIcon{
        position: absolute;
        top: 0.7em;
        
    }

  
     }
 `;




 export const AddPatientButton  = styled.div`

button{
    box-sizing: border-box;
 width: 122px;
 height: 48px;
 border: 1px solid #09CF83;
 border-radius: 5px;
 font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;
 color: #09CF83;
 background-color: white;
}

button:hover{
     color: white;
 background-color: #09CF83;
 }

 @media (max-width: 912px) and (min-width: 360px) {


 button{
    width: 70px;
 height: 38px;

 font-size: 12px;

}
 }
 `;



//   patients list and history of patient style
export const PatientsListAndHistoryHolder = styled.div`
 width: 100%;
     display: flex;
     margin-top: 20px;
     /* background-color: cyan; */
     justify-content: space-between;

     @media (max-width: 912px) and (min-width: 360px) {
   flex-direction: column;
}
`;

 export const ListOfPatients = styled.div`
 width: 43%;
 background-color: aliceblue;
 

    .patientDetails{
        width: 95%;
 height: 79px;
 background: rgba(9, 207, 131, 0.05);
 box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09);
 border-radius: 7px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
     }

     .patientDetails .patientImage img{
        width: 35px;
 height: 35px;
 border-radius: 50%;
     }


    .patientDetails .patientNameAndNo{
        display: flex;
        flex-direction: column;
    }

    .patientDetails .patientNameAndNo .patientName{
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #0F3949;
    }

     .patientDetails .patientNameAndNo .patientNo{
        font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;
     }

     .patientDetails .symptomAndDate{
        display: flex;
        flex-direction: column;
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #787878;
     }


 .forwardButton{
     width: 47px;
     height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
     border-left:1px solid #E0E0E0;
}
@media (max-width: 912px) and (min-width: 360px) {
    width: 100%;
}

 `;



//   patient history styling start here
 export const PatientHistory = styled.div`
 width: 55%;
    .fullPatientDetails{
        width: 100%;
         height: 145px;
         /* background-color: pink; */
         display: flex;
     }

     .fullPatientDetails .detailsAboutPatient{
         width: 70%;
 height: 145px;
 background: rgba(15, 57, 73, 0.04);
 display: flex;
 justify-content: space-around;
 align-items: center;
 position: relative;
     }

     .fullPatientDetails .detailsAboutPatient img{
     
        width: 99px;
        height: 99px;
        border-radius: 50%;


    }

     .fullPatientDetails .detailsAboutPatient 
     .patientPersonalInfo .fullName{
        font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 22px;
 line-height: 29px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #0F3949;

 }

  .fullPatientDetails .detailsAboutPatient 
    .patientPersonalInfo .ageAndDate{
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;
display: flex;
 justify-content: space-between;
 align-items: center;
 width: 85%;

  }
  .fullPatientDetails .detailsAboutPatient 
     .patientPersonalInfo .ageAndDate .divider{
     
 width: 5px;
 height: 5px;


 background: #979797;
  }



  .fullPatientDetails .detailsAboutPatient 
    .patientPersonalInfo .patAddress{

         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 145.52%;
 /* or 20px */


 color: #979797;
  }


  .fullPatientDetails .detailsAboutPatient .threeIcons{

         width: 20%;
         display: flex;
         justify-content: space-between;
         position: absolute;
         top: 2.7em;
         left: 17em;
    
  }



     .fullPatientDetails .nextVisit{
         width: 30%;
 height: 145px;
 background: #92E3A9;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;


     }

     .fullPatientDetails .nextVisit span{
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 700;
 font-size: 32px;
 line-height: 42px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #0F3949;

     }

     .fullPatientDetails .nextVisit p{
      
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;
     }

     .detailedDiagnosis{
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 700;
 font-size: 20px;
 line-height: 26px;
 /* identical to box height */
 padding-left: 1em;
 letter-spacing: -0.005em;

 color: #0F3949;
     }

     .diagnosisDetails {
         margin-top: 1em;
         margin-left: 1.3em;
     }



     .diagnosisDetails span{
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #263238;
     }

     .diagnosisDetails p{
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;
 padding-top:1.5em;
 color: #979797;
 }

 .treatmentDetails{
     margin-top: 1.5em;
     margin-left: 1.3em;
 }

 .treatmentDetails span{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #263238;
 }

 .treatmentDetails p{
     width: 100%;
     padding-top:1.5em;
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;

 }

 .treatmentDetails .treatmentDrugDetails{

 width: 95%;
 height: 89px;
 background: rgba(15, 57, 73, 0.05);
 border-radius: 5px;
 display: flex;
 align-items: center;
 justify-content: space-around;
 display: flex;
 justify-content: space-around;
 align-items: center;

 }

 .treatmentDetails .treatmentDrugDetails .drug1{

 display: flex;
 flex-direction: column;

 }

 .treatmentDetails .treatmentDrugDetails .drug1 .drugMesurement{

     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;
 padding-bottom: 0.5em;

 color: #263238;

 }

 .treatmentDetails .treatmentDrugDetails .drug1 .drugName{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;

 }


 .treatmentDetails .treatmentDrugDetails .drug2{

     display: flex;
 flex-direction: column;

 }

 .treatmentDetails .treatmentDrugDetails .drug2 .drugMesurement{

     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;
 padding-bottom: 0.5em;

 color: #263238;

 }

 .treatmentDetails .treatmentDrugDetails .drug2 .drugName{

     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;
 }



 .treatmentDetails .treatmentDrugDetails .drug3{

     display: flex;
 flex-direction: column;

 }

 .treatmentDetails .treatmentDrugDetails .drug3 .drugMesurement{

     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #263238;
 padding-bottom: 0.5em;

 }

 .treatmentDetails .treatmentDrugDetails .drug3 .drugName{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;

 }

 .symptomsDetails {
 margin-left: 1.3em;
 margin-top: 1.5em;
 }


 .symptomsDetails p{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #263238;
 }

 .symptomsDetails ul li{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;
 color: #979797;
 padding-bottom: 0.5em;
 }


 .testCarriedOut{
     margin-top: 1.5em;
     margin-left: 1.4em;
 }


 .testCarriedOut p{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #263238;
 }

 .testCarriedOut ul li{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;
 padding-bottom: 0.5em;
 color: #979797;
 }

@media (max-width: 912px) and (min-width: 360px) {
    width: 100%;
    margin-top: 20px;

    .fullPatientDetails .detailsAboutPatient img{
     
     width: 50px;
     height: 50px;
    
 }
 .fullPatientDetails .detailsAboutPatient .patientPersonalInfo
 .fullName{
    font-size: 1em;
 }
 .fullPatientDetails .detailsAboutPatient 
    .patientPersonalInfo .patAddress{

     
 font-size: 12px;
}

 .fullPatientDetails .detailsAboutPatient 
    .patientPersonalInfo .ageAndDate{
 font-size: 12px;
}


.fullPatientDetails .detailsAboutPatient .threeIcons{

position: absolute;
left: 12em;

}

}



 `;