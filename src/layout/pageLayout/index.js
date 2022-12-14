import React from "react";

import { PageContainer, ContentContainer } from "./styled";
import NavBar from "../../components/navbar";

const PageLayout = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
