import styled from "styled-components";

export const DashboardContentHolder = styled.div`
margin: 0;
padding: 0;
min-width: 100%;
min-height: 100vh; 
display: flex;
justify-content: space-between;
background-color: #F9FFFF;
.row{
        display: flex;
        /* flex-direction: column; */
        height: 100%;
}

/* background-color: brown; */
/* background: pink; */

@media (max-width: 912px) and (min-width: 360px) {
        width: 100%;
}
`;

export const LeftBarDashboardHolder = styled.div`
        width: 17vw;
        min-height: 100%;

`;

export const RightBarDashboardHolder = styled.div`
        width: 80vw;
        height: 100%;

`;