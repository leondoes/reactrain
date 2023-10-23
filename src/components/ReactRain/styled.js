import styled from "styled-components";
import { fontStyles, themeFonts } from "../../common/theme";

export const Title = styled.div`
font-family: ${themeFonts.brandFont};
${fontStyles.Smallcaps};
margin-top: -20px;
`;

export const Copy = styled.div`
font-family: ${themeFonts.bodyFont};
${fontStyles.Copy}
`;