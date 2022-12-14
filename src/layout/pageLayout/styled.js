import styled from "styled-components";



export const PageContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans");
  color: #F7F6F7;
  display: grid;
  font-family: "Work Sans";
  background-color: #4e4449;
  padding-left: 10%;
  padding-right: 10%;

  grid-template-columns:
    1fr
    min(145ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
`;

export const ContentContainer = styled.div`
display: flex;
box-shadow: 0 0 50px black;
`;
