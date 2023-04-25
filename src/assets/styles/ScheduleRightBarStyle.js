import styled from "styled-components";

export const ScheduleContentHolder = styled.div``
export const ScheduleButtons = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

.buttonHolder{
    box-sizing: border-box;

width: 229px;
height: 40px;


background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 5px;
display:flex;
justify-content: space-around;
align-items: center;
}

.buttonHolder button{
width: 67px;
height: 32px;
background-color:transparent;
border: none;
border-radius: 5px;
display: flex;
justify-content:center;
align-items:center;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.005em;

color: #979797;
}

.buttonHolder button:hover{
    background-color: rgba(9, 207, 131, 0.1);
    color: #09CF83;
}


.modalButton button{
    box-sizing: border-box;

width: 122px;
height: 48px;

border: 1px solid #09CF83;
border-radius: 5px;
background-color: transparent;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.005em;

color: #09CF83;
}

.modalButton button:hover{
    background-color: rgba(9, 207, 131, 0.1);
    color: #09CF83;
    border: none;

 
}


`;

// schedule calendar and schedule 
// activity styling for modal start here
export const ScheduleCalender = styled.div`
     width: 100%;
  background-color: brown;

     .scheduleActivityForm form label{
        font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;

color: #979797;
    }


         .scheduleActivityForm form .inputHolderForDate{
                position: relative;
               
    }

         .scheduleActivityForm form 
         .inputHolderForDate 
         .dateIcon{
                position: absolute;
                bottom: 0.7em;
                left: 27em;
    }

    

       .scheduleActivityForm form 
         .startAndEndTimeInputHolder
         .startTimeHolder
         {
               position: relative;
    }

          .scheduleActivityForm form 
         .startAndEndTimeInputHolder
         .startTimeHolder .startTimeIcon
         {
               position: absolute;
               bottom: 0.7em;
               left: 12.5em;
    }


       .scheduleActivityForm form 
         .startAndEndTimeInputHolder
         .endTimeHolder .endTimeIcon
         {
               position: absolute;
               bottom: 8em;
                left: 28.2em;
              
    }

    .modal-footer .cancelButton{
        height: 56px;
width: 171px;
border: 1px solid #09CF83;
border-radius: 6px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
/* identical to box height */

text-align: center;

color: #09CF83;
    }

    .modal-footer .submitButton{

        height: 56px;
width: 171px;
background: #09CF83;
border-radius: 6px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
border: none;
    }

    .successModal{
border-radius: 20px;
height: 384px;
width: 100%;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;


    }
    .successModal .successImage{
width: 100%;

    }

    .successModal .successImage img{
        height: 105px;
width: 103px;

border-radius: 0px;

    }

    .successModal .successMessage{
        width: 100%;
            display: flex;
            flex-direction: column;
    }

    .successModal .successMessage .message1{
        
        font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
text-align: center;
letter-spacing: -0.005em;

color: #032735;
padding-bottom:0.7em;
}


.successModal .successMessage .message2{
    font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 129%;
/* or 23px */

/* text-align: center; */
letter-spacing: -0.035em;

color: #979797;
}

.modalFooterSuccess button{
    height: 56px;
width: 240px;
background: #09CF83;
border-radius: 6px;
border: none;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

}
`;


// monitoring session content holder style start from here
export const MonitoringSessionHolder = styled.div`
width: 242px;
min-height: 262px;
background: #FFFFFF;
box-shadow: 0px 34px 24px rgba(0, 0, 0, 0.1);
border-radius: 10px;
display: flex;
justify-content: center;


position: absolute;
top: 50em;
left: 60em;

.monitoringSessionContent{
  width: 90%;
  height: 90%;
    }

    .monitoringSessionContent .closeIconHolder{
  position: relative;
    }

    .monitoringSessionContent .closeIconHolder .timesIcon{
  position: absolute;
  left: 12em;
  top: 0.5em;
  cursor: pointer;
}

.monitoringSessionContent .headerDateTime .theDateTime{
    
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 14px;
letter-spacing: -0.005em;

color: #979797;
width: 75%;
height: 20px;
display: flex;
justify-content: space-between;
align-items: center;

}
.monitoringSessionContent .headerDateTime h4{
    
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
/* identical to box height */

letter-spacing: -0.005em;

color: #0F3949;
padding-top: 1em;
    
    }

    .monitoringSessionContent .theDetails span{
        font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 14px;
letter-spacing: -0.005em;

color: #0F3949;
            
    }

    .monitoringSessionContent .theDetails p{
    
        font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 14px;
letter-spacing: -0.005em;

color: #979797;
padding-top: 1em;
}

.monitoringSessionContent .theHorizontalLine {
  
    display: flex;
    justify-content: center;

}

.monitoringSessionContent .theHorizontalLine hr {
    width: 208px;
height: 0px;
border: 1px solid #E0E0E0;


}

.monitoringSessionContent .confirmScheduleButtonsHolder {
width: 100%;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;

}

.monitoringSessionContent .confirmScheduleButtonsHolder span{

    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 14px;
letter-spacing: -0.005em;

color: #0F3949;
}
.monitoringSessionContent 
.confirmScheduleButtonsHolder 
.confirmButton{
    box-sizing: border-box;
width: 98px;
height: 32px;
border: 1px solid #09CF83;
border-radius: 5px;
background-color: transparent;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
/* identical to box height */

letter-spacing: -0.005em;

color: #09CF83;
}

.monitoringSessionContent 
.confirmScheduleButtonsHolder 
.confirmButton:hover{

    background-color:  #09CF83;
    color: white;

}

.monitoringSessionContent 
.confirmScheduleButtonsHolder 
.rescheduleButton{
    box-sizing: border-box;
width: 98px;
height: 32px;
border: 1px solid #979797;
border-radius: 5px;
background-color: transparent;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
/* identical to box height */

letter-spacing: -0.005em;

color: #979797;

}

.monitoringSessionContent 
.confirmScheduleButtonsHolder 
.rescheduleButton:hover{
    background-color: #979797;
    color: white;
}
`;

