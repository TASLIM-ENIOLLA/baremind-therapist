import styled from "styled-components";

// export const SidebarHolder = styled.div`
// width: 100%;
// height: 100%;
// background-color: #5161CE;


// `;

export const Sidebar = styled.div`
width: 100%;
/* position: fixed; */
display: flex;
flex-direction: column;
 height: 100%;
background-color: #5161CE;




`;
export const SideBarMenu = styled.div`

.sideBarList{
      width: 100%;
      /* font-size: 24px; */
      display: flex;
      text-align: center;
      /* background-color: black; */
      margin: 5px 0px 5px 0px;
      padding: 20px 40px;
     cursor: pointer;
   
}

.active{
      background-color: rgba(224, 224, 224, 0.25);
}


.sideBarList a{
      text-decoration: none;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
}

.sideBarList a span{
      padding-left: 1em;
      font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 18px;

color: #FFFFFF;
}

.sideBarList:hover{
      background-color:rgba(224, 224, 224, 0.25);;
}



@media (max-width: 912px) and (min-width: 360px) {
      .sideBarList a span{
                 
                  display: none;
                 
      }

      .sideBarList{
                 
                 margin: 0 0 1em 0;
                 padding: 2em 0 2em 0;
                 display: flex;
                 justify-content: center;
                
     }

    

        }

        
`;

export const LogoHolder = styled.div`
/* width: 100%;
margin-bottom: 50px;
/* margin-top: 30px; 
background-color: yellow; */
width: 100%;
height: 10vh;
margin-bottom: 50px;
margin-top: 30px; 

img{
 height: 52px;
width: 50px;
margin-left: 35px; 
border-radius: 0px;

}

@media (max-width: 912px) and (min-width: 360px) {
      
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;

      img{
 height: 32px;
width: 30px;
margin-left: 0px; 

}
}


`;

