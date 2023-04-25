import styled from "styled-components";


export const TopRight = styled.div`
width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  /* width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: brown; */
`;

export const TopRightOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

   .greetingsName {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
     font-weight: 500;
    font-size: 32px;
    line-height: 26px;
     color: #263238;
   }

     .welcomeMessage {
     font-family: 'DM Sans', sans-serif;
    font-style: normal;
     font-weight: 400;
    font-size: 16px;
    line-height: 26px;
     color: #979797;
    opacity: 0.97;
   }

   @media (max-width: 912px) and (min-width: 360px) {
    .greetingsName {

      font-size:18px ;
      font-weight: 600;

     }

     .welcomeMessage {
       font-size:10px ;

     }
   }
`;
export const TopRightTwo = styled.div`
display: flex;
align-items: center;
width: 27%;
justify-content: space-between;

.imageAndNameHolder{
  display: flex;
  justify-content: space-between;
  width: 58%;
   align-items: center;
}

.imageAndNameHolder .imageHolder img{
  height: 45px;
width: 45px;

border-radius: 50%;

}

.imageAndNameHolder .nameHolder{
 display: flex;
 flex-direction: column;

}

.imageAndNameHolder .nameHolder .nameOfUser{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.005em;

color: #263238;

}

.imageAndNameHolder .nameHolder .country{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.005em;

color: #787878;

}

.iconsHolder{
  display: flex;
  justify-content: space-between;
  width: 42%;
}

.iconsHolder .iconComment{
  margin-left: 4em;
}


@media (max-width: 912px) and (min-width: 360px) {
  width:55%;

  .imageAndNameHolder .nameHolder .nameOfUser {

      font-size:10px ;
       font-weight: 600;

    }

    /* .imageAndNameHolder{
      flex-direction: column;
    } */

    .imageAndNameHolder .imageHolder img{
  height: 30px;
width: 30px;

  }

  .iconsHolder .iconComment{
  margin-left: 2em;
}
}
`;


// export const TopRightOne = styled.div`
//   display: flex;
//   flex-direction: column;

//   .greetingsName {
//     font-family: 'DM Sans', sans-serif;
//     font-style: normal;
//     font-weight: 500;
//     font-size: 32px;
//     line-height: 26px;
//     color: #263238;
//   }

//   .welcomeMessage {
//     font-family: 'DM Sans', sans-serif;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 26px;
//     color: #979797;
//     opacity: 0.97;
//   }

//   @media (max-width: 912px) and (min-width: 360px) {
//     .greetingsName {

//       font-size:18px ;
//       font-weight: 600;

//     }

//     .welcomeMessage {
//       font-size:10px ;

//     }
//   }
// `;

// export const TopRightTwo = styled.div`
//   width: 30%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .nameOfUser {
//     font-family: 'DM Sans', sans-serif;
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 23px;
//     letter-spacing: -0.005em;

//     color: #263238;
//   }

//   .country {
//     font-family: 'DM Sans', sans-serif;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 18px;
//     letter-spacing: -0.005em;

//     color: #787878;
//   }

//   @media (max-width: 912px) and (min-width: 360px) {

//     background-color: yellow;
//   }
// `;