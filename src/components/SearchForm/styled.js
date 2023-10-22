import styled from "styled-components";
import { themeFonts } from "../../common/theme";

export const TextInput = styled.input`
  padding: 4px;
  font-size: 16px;
  border-width: 0px;
  border-color: #f4f7f5;
  background-color: #515151;
  color: #f4f7f5;
  border-style: solid;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-family: ${themeFonts.brandFont};
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.div `
width: 20px;
background-color: #515151;
padding-top: 2px;
padding-right: 1px;
padding-left: 1px;
border-width: 2px;
border-style: solid;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-color: #515151;

    cursor:pointer;
`;

export const SearchContainer = styled.div`
display: flex;
`;