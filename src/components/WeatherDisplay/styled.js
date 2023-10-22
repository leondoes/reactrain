import styled from "styled-components";
import { fontStyles, themeFonts } from "../../common/theme";

export const PageContainer = styled.div `
display: flex;
flex-direction: row;
padding: 5px;
margin: 5px;
`;

export const InsideContainer = styled.div `
padding: 20px;
margin: 10px;
background-color: #212422;
border-radius: 10px;
`;

export const Icon = styled.img `
width: 80px;
height: 80px;
`;

export const Copy = styled.div`
font-family: ${themeFonts.bodyFont};
${fontStyles.Copy}
padding: 10px;
`;

export const Title = styled.div`
font-family: ${themeFonts.brandFont};
${fontStyles.Smallcaps};
font-size: 40px;
`;