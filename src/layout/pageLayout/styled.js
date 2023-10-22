import styled from "styled-components";
import { themeColors } from "../../common/theme";

export const PageContainer = styled.div`
  background-color: ${themeColors.dark};
  color: ${themeColors.font};
  height: 100%;
  width: 100%;
  height: 100vh;
  width: 100vw;

  //Doesn't move content on webpage when there's no scroll bar



  display: grid;
  grid-template-columns:
    1fr
    min(140ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of navbar */
  &:before {
    content: "";
    position:sticky;
    background-color: blue;
    grid-row: 1;
    grid-column: 1;
    top: 0;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    position: sticky;
    background-color: red;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
    top: 0;
    
  }
`;

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
`;
