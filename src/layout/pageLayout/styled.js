import styled from "styled-components";
import { themeColors, themeFonts } from "../../common/theme";
import backgroundPattern from "../../Assets/icon.png";

export const PageContainer = styled.div`
  background-image: url(${backgroundPattern});
  background-color: black;
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
    position: sticky;
    grid-row: 1;
    grid-column: 1;
    top: 0;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    position: sticky;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
    top: 0;
  }
`;

export const ContentContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(15, 0, 19, 1) 0%,
    rgba(48, 0, 60, 1) 100%
  );
  padding: 30px;

  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 18px;
  max-height: 90vh;
  overflow-y: auto;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
`;

export const Footer = styled.div`
  font-family: ${themeFonts.brandFont};
  color: ${themeColors.font};
  position: fixed;
  bottom: 10px;
`;
