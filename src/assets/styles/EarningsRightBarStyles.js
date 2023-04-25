import styled from "styled-components";

export const EarningsContentHolder = styled.div`
  width: 100%;
height: 100%;
`;
 export const RewardContentHolder = styled.div`
   width: 100%;
   min-height: 30vh;
   margin-bottom: 3em;
  /* background-color: green; */
     display: flex;
   justify-content: space-between;

   .rewardDetails {
     width: 30%;
     height: 100%;
     background: #ffffff;
     box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09);
     border-radius: 20px;
     position: relative;
  }
  .rewardDetails p {
    font-family: "DM Sans";
     font-style: normal;
    font-weight: 600;
    font-size: 22px;
     line-height: 29px;
    color: #263238;
     padding-left: 0.7em;
     position: absolute;
     top: 0.5em;
   }

  .rewardDetails .totalBalance {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
     font-size: 14px;
    line-height: 18px;
    padding-left: 1.2em;
     color: #616161;
    position: absolute;
     top: 3.5em;
   }

  .rewardDetails .amount {
     width: 30%;
     height: 40px;
    /* background-color: red; */
         display: flex;
    align-items: center;
    justify-content: space-between;
     position: relative;
    margin-left: 1.2em;
    margin-top: 5em;
    margin-bottom: 0.3em;
   }

   .rewardDetails .amount .figure {
     font-family: "DM Sans";
    font-style: normal;
     font-weight: 500;
     font-size: 40px;
     line-height: 52px;
     color: #263238;
    position: absolute;
     left: 0.7em;
  }

  .rewardDetails .amount .currency {
    color: #979797;
   }

  .rewardDetails .amount .near {
     font-family: "DM Sans";
     font-style: normal;
     font-weight: 400;
     font-size: 14px;
    line-height: 18px;

     color: #979797;
     position: absolute;
     left: 8.5em;
     top: 1.4em;
  }

   .rewardDetails .waveMoney {
    width: 17%;
    height: 30px;
     display: flex;
     justify-content: space-between;
   align-items: center;
     margin-left: 1.2em;
     position: relative;
    margin-bottom: 0.3em;
   }

   .rewardDetails .waveMoney .waveMoneyCash {
    font-family: "DM Sans";
    font-style: normal;
     font-weight: 500;
     font-size: 1.2em;
     line-height: 18px;
     color: #979797;
     position: absolute;
     left: 0.9em;
   }

  .rewardDetails .waveMoney .waveMoneyIcon {
     position: absolute;
     bottom: 0.4em;
   }

   .rewardDetails .referralHolder ul {
     display: flex;
     justify-content: space-between;
    position: relative;
   }

   .rewardDetails .referralHolder ul li {
     font-family: "DM Sans";
     font-style: normal;
    font-weight: 400;
     font-size: 14px;
    line-height: 18px;

     color: #979797;
   }

   .rewardDetails .referralHolder ul .referralNumber {
     position: absolute;
     left: 15em;
   }

  .manageReward {
     width: 65%;
     height: 100%;
     background: #ffffff;
     box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09); 
        border-radius: 20px;
    display: flex;
     justify-content: center;
     align-items: center;
   }

   /* manage reward styling starts from here */

   .manageReward .innerManageRewardHolder {
     width: 90%;
     height: 85%;
    /* background-color: brown; */
     display: flex;
    flex-direction: column;
     justify-content: center;
       }
   .manageReward .innerManageRewardHolder .manageYourReward {
     width: 100%;
    height: 33%;
     border-bottom: 1px solid #e0e0e0;
   }

  .manageReward 
  .innerManageRewardHolder 
  .manageYourReward span {
    font-family: "DM Sans";
     font-style: normal;
     font-weight: 500;
     font-size: 18px;
    line-height: 23px;

    color: #263238;
  }

   .manageReward .innerManageRewardHolder .manageYourReward p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
     font-size: 14px;
    line-height: 18px;
     color: #979797;
     padding-top: 5px;
   }

   .manageReward .innerManageRewardHolder .autoWithdraw {
     width: 100%;
     height: 33%;
     /* background-color: green; */
     display: flex;
     justify-content: space-between;
    align-items: center;
   }

   .manageReward 
   .innerManageRewardHolder
    .autoWithdraw .autoWithdrawContent {
     width: 100%;
     height: 100%;
   }

   .manageReward
     .innerManageRewardHolder
    .autoWithdraw
     .autoWithdrawContent
    span {
     font-family: "DM Sans";
    font-style: normal;
     font-weight: 500;
     font-size: 14px;
     color: #09cf83;
   }

   .manageReward .innerManageRewardHolder .autoWithdraw .autoWithdrawContent p {
    font-family: "DM Sans";
     font-style: normal;
     font-weight: 400;
     font-size: 14px;
     line-height: 18px;
     color: #979797;
     padding-top: 5px;
   }

   .manageReward .innerManageRewardHolder .shopMarketPlace {
     width: 100%;
     height: 33%;
    border-top: 1px solid #e0e0e0;
   display: flex;
    justify-content: space-between;
    align-items: center;
   }

   .manageReward
     .innerManageRewardHolder
     .shopMarketPlace
     .shopMarketPlaceContent {
     width: 100%;
     height: 100%;
   }

   .manageReward
     .innerManageRewardHolder
    .shopMarketPlace
     .shopMarketPlaceContent
     span {
     font-family: "DM Sans";
     font-style: normal;
     font-weight: 500;
    font-size: 14px;
     line-height: 18px;
     color: #09cf83;
   }

   .manageReward
    .innerManageRewardHolder
    .shopMarketPlace
    .shopMarketPlaceContent
     p {
     font-family: "DM Sans";
     font-style: normal;
   font-weight: 400;
    font-size: 14px;
    line-height: 18px;
     color: #979797;
    padding-top: 5px;
   }
   @media (max-width: 912px) and (min-width: 360px) {

    flex-direction: column;
    margin-top: 10px;

    .rewardDetails{
        width: 100%;
        margin-bottom: 10px;
    }

    .manageReward{
        width: 100%;
    }

  

    .rewardDetails .amount .figure {
     font-size: 30px;
    position: absolute;
     left: 0.7em;
  }

  .rewardDetails .amount .near {
     font-size: 12px;
    position: absolute;
     left: 7.5em;
  }

  .rewardDetails .referralHolder ul .referralNumber {
     position: absolute;
     left: 13em;
   }
   }
 `;





// // referral content style starts from here
 export const ReferralsContentHolder = styled.div`
   width: 100%;
   height: 190px;
   background: #FFFFFF;
   box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
   margin-top: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
  margin-bottom: 3em;


   .innerReferralsContentHolder {
     width: 90%;
     height: 90%;
     /* background-color: lightcyan; */
     display: flex;
     justify-content: space-between;
    align-items: center;
   }

   .innerReferralsContentHolder
     .contentsForReferrals{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
     }


   .innerReferralsContentHolder
    .contentsForReferrals
     .contentsForReferralsHeader {
     width: 150px;
     height: 46px;
    /* background-color: purple; */
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 18px;
 line-height: 23px;

 color: #263238;
     margin-bottom: 10px;
   }

   .innerReferralsContentHolder
     .contentsForReferrals
     .contentsForReferralsMessage {
   width: 574px;
    height: 36px;
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;

 color: #979797;
   }




   .innerReferralsContentHolder
     .contentsForReferrals
     .contentsForReferralsButton button{
         background: #09CF83;
         border-radius: 5px;
         border: none;

         font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 18px;
 letter-spacing: -0.005em;

 color: #FFFFFF;
 padding: 1em 1.5em 1em 1.5em;
 cursor: pointer;


   }

   .innerReferralsContentHolder
    .referraImage img {
       width: 50px;


     }

     @media (max-width: 912px) and (min-width: 360px) {

      width: 100%;
      .innerReferralsContentHolder
     .contentsForReferrals
     .contentsForReferralsButton button{


 font-size: 12px;

 color: #FFFFFF;
 padding: 0.5em 1em 0.5em 1em;

     }

     .innerReferralsContentHolder
     .contentsForReferrals
     .contentsForReferralsMessage {
   width: 100%;
    height: 20px;
 font-size: 12px;

   }

   .innerReferralsContentHolder
    .referraImage  {
       position: relative;

     }


     .innerReferralsContentHolder
    .referraImage img {
       /* display: none; */
       width: 30px;
       position: absolute;
       bottom: 2.7em;
       right: 0.5em;

     }
     }
 `;


// // transaction table style
 export const TransactionContentHolder = styled.div`
 width: 100%;
  min-height: 40vh;



 p{
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 500;
 font-size: 18px;
 line-height: 23px;

color: #263238;
  }

  .table{
     background: #FFFFFF;
    box-shadow: 0px 14px 44px rgba(0, 0, 0, 0.09);
 border-radius: 20px;
  }

 .table thead tr{
     background-color:rgba(224, 224, 224, 0.3);
 }
  .table thead tr th{
    font-family: 'DM Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 18px;

 color: #616161;
 }

  .table tbody .theFirstValues {
     font-family: 'DM Sans';
 font-style: normal;
 font-weight: 700;
 font-size: 14px;
 line-height: 18px;

 color: #263238;
  }

 .table tbody .theOtherValues {
     font-family: 'DM Sans';
 font-style: normal;
font-weight: 400;
 font-size: 14px;
 line-height: 18px;

 color: #979797;
 }
 
 `;
