import React from "react";
import PageLayout from "../../layout/pageLayout";
import {Title,Copy} from "./styled.js"
import WeatherApp from "../GeoLocation";

const ReactRain = () => {

  

  return (
    <PageLayout>
<Title>Hello World.</Title>
<Copy><WeatherApp/></Copy>
    </PageLayout>
  );
};

export default ReactRain;