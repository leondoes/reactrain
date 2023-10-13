import React, { useEffect} from "react";
import PageLayout from "../../layout/pageLayout";
import {Title} from "./styled.js"

const ReactRain = () => {
  useEffect(() => {
    document.title = "React Rain";
  }, []);

  return (
    <PageLayout>
<Title>Hello World.</Title>
    </PageLayout>
  );
};

export default ReactRain;