import styled from "styled-components";

export const CommunityContentHolder = styled.div`
        /* width: 100%;
        min-height: 100vh; */
        /* background-color: cyan; */
        /* display: flex;
        justify-content: space-between; */

        width: 100%;
height: 100%;
display: flex;
justify-content: space-between;

@media (max-width: 912px) and (min-width: 360px) {
    display: flex;
    flex-direction: column;
}
`;

export const CreatePostAndMessageHolder = styled.div`
        width: 60%;
         height: 100%;

     @media (max-width: 912px) and (min-width: 360px) {
        width: 100%;
        margin-bottom:20px;
}
 `;




 export const CreatePostHolder = styled.div`
 width: 100%;
 height: 240px;
      background: #FFFFFF;
 box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09);
 border-radius: 20px;


 .createPostHolderHeader span{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 24px;
 line-height: 31px;
 padding-left: 1.5em;

 color: #263238;
}




 .postFormHolder form {
     display: flex;
    flex-direction: column;
     justify-content: center;
    align-items: center;
 }


 .postFormHolder form .textFieldHolder{
     width: 100%;
     height:63%;
     /* background-color: blue; */
     display: flex;
     justify-content: center;
     /* background: #F3F5F7; */
 border-radius: 10px;
 position: relative;
 }

 .postFormHolder form .textFieldHolder .postTextIcon{
    position: absolute;
     left: 5em;
     top: 2em;
 }



 .postFormHolder form .textFieldHolder textarea{
     width: 90%;
    height: 112px;
    background: #F3F5F7;
 border-radius: 10px;
 /* border: none; */
 padding-top: 2.5em;
 padding-left: 6em;
 font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 18px;
 line-height: 23px;

 color: #787878;


 }


 




 .postFormHolder form .textFieldHolder textarea:focus{
     outline: none;

 }

 .postFormHolder form .submitButAndVideoImgIcons{
    
        width: 90%;
         /* background-color: green; */
        display: flex;
         justify-content: space-between;
         margin-top: 1em;
 }

 .postFormHolder form 
 .submitButAndVideoImgIcons 
 .videoImgIconHolder{
 width: 30%;
 /* background-color: blue; */
 display: flex;
 justify-content: space-between;
 }

 .postFormHolder form 
 .submitButAndVideoImgIcons 
 .videoImgIconHolder .image{
 width: 35%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 }

 .postFormHolder form 
.submitButAndVideoImgIcons 
 .videoImgIconHolder .image span{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;

 color: #92E3A9;
 }

 .postFormHolder form 
.submitButAndVideoImgIcons 
 .videoImgIconHolder .video{
 width: 35%;
 /* background-color: lightcoral; */
 display: flex;
 justify-content: space-between;
 align-items: center;
 }



 .postFormHolder form 
 .submitButAndVideoImgIcons 
 .videoImgIconHolder .video span{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;

 color: #92E3A9;
 }


 .postFormHolder form 
 .submitButAndVideoImgIcons 
 .submitButtonHolder button{
     height: 56px;
 width: 163px;
 border: none;
 border-radius: 5px;

 background: #09CF83;
 border-radius: 5px;
 font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 18px;
 line-height: 23px;
 letter-spacing: -0.005em;

 color: #FFFFFF;
 display: flex;
justify-content: center;
 align-items: center;
 /* position: relative; */
 }





 .postFormHolder form 
 .submitButAndVideoImgIcons 
 .submitButtonHolder .arrowIconForButton{
  margin-left: 10px;
 }

 @media (max-width: 912px) and (min-width: 360px) {

    .createPostHolderHeader span{
   
 font-size: 18px;
 
}
.postFormHolder form .textFieldHolder .postTextIcon{
    position: absolute;
     left: 2em;
     top: 2em;
     width: 20px;
 }

 .postFormHolder form .textFieldHolder textarea{

    font-size: 14px;
    padding-top: 2.7em;
 padding-left: 3em;
 }

 .postFormHolder form 
 .submitButAndVideoImgIcons 
 .submitButtonHolder button{
    height: 35px;
 width: 100px;

 }

 .postFormHolder form 
.submitButAndVideoImgIcons 
 .videoImgIconHolder{
    width: 50%;

 }
     }
`;



 export const PostMessagesHolder = styled.div`
      width: 100%;
height: 200px;
 background: #FFFFFF;
box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09);
 border-radius: 20px;
 /* background-color: green; */
 display: flex;
 justify-content: center;
 align-items: center;

 `;

 export const MessageContentHolder = styled.div`
  width: 90%;
     height: 95%;
    
`;

 export const UserdetailsForMessage = styled.div`
    width: 100%;
   display: flex;
     justify-content: space-between;
     align-items: center;

    

     .userNameAndImage{
             background-color: white;
             width: 30%;
             display: flex;
            justify-content: space-between;
             align-items: center;
     }

    

     .userNameAndImage .image img{
             width: 35px;
            height: 35px;
             border-radius: 50%;
         }

    .userNameAndImage .nameAndTime{
         display: flex;
        flex-direction: column;
            
     }

     .userNameAndImage .nameAndTime .name{
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #263238;
            
     }

     .userNameAndImage .nameAndTime .time{
       
         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #787878;
 padding-top: 0.3em;
     }



    .icon .dotIcon{
            transform: rotate(90deg);
    }

    @media (max-width: 912px) and (min-width: 360px) {
        .userNameAndImage{
            width: 50%;
        }
     }
 `;


 export const DetailsOfTheMessage = styled.div`
   width: 100%;
   min-height: 15vh;
 background: #F3F5F7;
 border-radius: 10px;

 p{
    font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;

 color: #787878;
 padding: 2em;
 }
 @media (max-width: 912px) and (min-width: 360px) {
    height: 10vh;
     }

`;

export const LikeCommentShareHolder = styled.div`
 width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

 .likes{
     width: 20%;
 display: flex;
 justify-content: space-between;
align-items: center;
 cursor: pointer;
 }

 .comments{
    width: 30%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 cursor: pointer;

 }

 .shares{
     width: 20%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 cursor: pointer;

}

 span{
    font-family: 'DM Sans';
 font-weight: 500;
 font-size: 12px;
 line-height: 16px;
// /* identical to box height */


 color: #979797;
 }

 @media (max-width: 912px) and (min-width: 360px) {
   width: 100%;
     }
`;


// // event styling starts from here
 export const EventsHolder = styled.div`
 width: 35%;
 height: 100%;

 @media (max-width: 912px) and (min-width: 360px) {
        width: 100%;
}
      
//         display: flex;
//         flex-direction: column;
//         align-items: center;

//         h2{
//             padding-right: 12em;
//             font-family: 'DM Sans';
// font-style: normal;
// font-weight: 600;
// font-size: 24px;
// line-height: 31px;

// color: #263238;
//         }
 `;

 export const InnerEventHolder = styled.div`
 width: 100%;
 height: 418px;

 /* background: #FFFFFF; */
 background-color: white;
 box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09);
 border-radius: 20px;
 margin-bottom: 20px;

 .upComingTextAndDotIcon{
     height: 10%;
    width: 100%;
     /* background-color: yellow; */
     display: flex;
     justify-content: space-between;
    align-items: center;
}

 .upComingTextAndDotIcon .upcomingtext{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 18px;
 line-height: 23px;
 letter-spacing: -0.005em;

 color: #263238;
 padding-left: 0.5em;
 padding-top: 2em;
 }

 .upComingTextAndDotIcon .dots{
     transform: rotate(90deg);
     margin-right: 0.5em;
     margin-top: 2em;

}


 .eventDetailsHolder{
     height: 40%;
     width: 100%;
     /* background-color: green; */
     margin-top: 10px;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }


 .eventDetailsHolder .detailsOfTheEvent{
     height: 80%;
     width: 65%;
     /* background-color: blue; */
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
 }

 .eventDetailsHolder .detailsOfTheEvent span{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 700;
 font-size: 24px;
 line-height: 31px;
 letter-spacing: -0.005em;

 color: #263238;
 }


 .eventDetailsHolder .detailsOfTheEvent p{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 13px;
 line-height: 18px;
 letter-spacing: -0.005em;
 color: #979797;
 padding-left: 10px;


 }

 .eventDetailsHolder .dayOfEvent{
     height: 80%;
     width: 30%;
     /* background-color: yellow; */
     background: #F3F5F7;
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-right: 0.5em;
 }

 .eventDetailsHolder .dayOfEvent span{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 36px;
 line-height: 47px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #0F3949;
 }


 .eventDetailsHolder .dayOfEvent p{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #787878;
 }

 .venueDateTime{
     height: 20%;
 width: 100%;
 /* background-color: purple; */
 display: flex;
 flex-direction: column;
 padding: 0.5em;


 }

 .venueDateTime .details{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 16px;
 line-height: 21px;
 /* identical to box height */

 letter-spacing: -0.005em;

 color: #263238;

 }

 .venueDateTime .dateTime{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;
 padding-top: 0.5em;

 }

 .venueDateTime .address{

     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #979797;
 padding-top: 0.5em;
 }

 .bookButton button{
     width:145px;
 height:56px;
     background: #09CF83;
 border-radius: 5px;
 font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 18px;
 line-height: 23px;
 letter-spacing: -0.005em;
 border: none;

 color: #FFFFFF;
 margin-top: 1.5em;
 margin-left: 0.7em;
 }

 .bookButton {


 }
 `;



