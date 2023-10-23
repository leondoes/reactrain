import styled from "styled-components";
import { themeFonts } from "../../common/theme";

export const TextInput = styled.input`
  font-size: 16px;
  color: #f4f7f5;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  font-family: ${themeFonts.brandFont};
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  width: 20px;
  padding-top: 2px;
  padding-right: 1px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-color: #515151;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
  border: 1px solid rgba(255, 255, 255, 0.22);

  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
`;
