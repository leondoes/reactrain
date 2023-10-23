import styled, { keyframes, css } from "styled-components";
import { fontStyles, themeFonts } from "../../common/theme";




export const PageContainer = styled.div`
  display: none;
  flex-direction: row;
  padding: 5px;
  margin-right: 5px;
  justify-content: space-around;
  

  /* Apply animation */
  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeIn} 1s ease;
      display: flex;
    `}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const InsideContainer = styled.div `
padding: 20px;
margin-right: 20px;
background-color: #212422;
border-radius: 10px;
background: rgba(255, 255, 255, 0.1);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.2px);
-webkit-backdrop-filter: blur(5.2px);
border: 1px solid rgba(255, 255, 255, 0.22);
`;

export const ForecastContainer = styled.div`
margin-bottom:20px;
`

export const Icon = styled.img `
width: 100px;
height: 100px;
`;

export const Copy = styled.div`
font-family: ${themeFonts.bodyFont};
${fontStyles.Copy};
font-size: 12px;
padding: 10px;
`;

export const Highlight = styled.div`

font-size: 22px;
`

export const Title = styled.div`
font-family: ${themeFonts.brandFont};
${fontStyles.Smallcaps};
font-size: 40px;
`;