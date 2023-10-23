import { PageContainer, ContentContainer,Footer } from "./styled";

const PageLayout = ({ children, ...props }) => {
  return (
    <PageContainer {...props}>
      <ContentContainer>{children}</ContentContainer><Footer>API data provided by weatherAPI.com</Footer>
    </PageContainer>
  );
};

export default PageLayout;
