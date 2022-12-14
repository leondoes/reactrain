import styled from "styled-components";

export const navBarHeight = 90;

export const NavbarStyled = styled.div`
  position: sticky;
  top: 0;
  flex-direction: column;
  z-index: 1;
  background: #D1936F;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: #F7F6F7;
  border: 0;
  border-radius: 3px;
  padding-left: 2%;
  margin-top: 2%;
    box-shadow: 0 0 50px black;
  font-size: 40px;
  display: flex;
  height: ${navBarHeight - 1 + "px"}; /* subtract 1 for border*/
  transition: height 0.4s ease 0s;
`;
