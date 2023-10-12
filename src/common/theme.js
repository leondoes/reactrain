//Brand Theme

export const themeFonts = {
  brandFont: "Work Sans",
  bodyFont: "Montserrat",
};

export const themeColors = {
  brand: "#FF311B",
  dark: "black",
  font: "#F4F7F5",
};

//Supported resolutions
export const mediaQuery = {
  up: {
    mobile: `@media (min-width: 600px)`,
    tablet: `@media (min-width: 768px)`,
    desktop: `@media (min-width: 992px)`,
    desktopL: `@media (min-width: 1200px)`,
  },
  down: {
    mobile: `@media (max-width: 600px)`,
    tablet: `@media (max-width: 768px)`,
    desktop: `@media (max-width: 992px)`,
    desktopL: `@media (max-width: 1200px)`,
  },
};

//Website Text Theme

export const fontStyles = {
  Title: `font-weight: 900;
  color: ${themeColors.font};
  letter-spacing: -2px;
  font-size: 70px;
  padding-bottom: 20vh;
  padding-top: 20vh;

  @keyframes slideFromCenter {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }


  animation: slideFromCenter 0.9s ease-in-out;


  ${mediaQuery.down.tablet} {
    font-size: 40px;
    letter-spacing: -1px;
  }`,

  Smallcaps: `font-weight: 900;

  color: ${themeColors.font};
  letter-spacing: -2px;
  font-size: 70px; font-variant: small-caps;
  margin-top: 20vh;
  width: fit-content;

  @keyframes slideFromCenter {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }


  animation: slideFromCenter 0.9s ease-in-out;


  ${mediaQuery.down.tablet} {
    font-size: 40px;
    letter-spacing: -1px;
  }`,

  Subtitle: `font-weight: 700;
  color: ${themeColors.font};
  font-family: ${themeFonts.brandFont};
font-size: 50px;
letter-spacing: -2px;
padding-top: 5vh;
padding-bottom: 10vh;

${mediaQuery.down.tablet} {
  font-size: 30px;
  letter-spacing: -1px;
}
`,

  Copy: `font-family:
   ${themeFonts.bodyFont};
  color: ${themeColors.font};
  display: flex;
  flex-direction: column;
  font-size: 24px;
  gap: 20px; 
  `,
};
