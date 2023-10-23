import styled from "styled-components";
import { fontStyles, themeFonts } from "../../common/theme";

export const Title = styled.div`
  font-family: ${themeFonts.brandFont};
  ${fontStyles.Smallcaps};
  margin-top: -20px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
