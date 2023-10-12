import "./styles.css";
import React from "react";
import package_json from "../package.json";
import MainPage from "./components/Main";

document.body.style.margin = 0;
document.title = "React Rain by leondoes.";


window.__leonVersion = package_json.version;

const App = () => (
  <MainPage/>
);

export default App;