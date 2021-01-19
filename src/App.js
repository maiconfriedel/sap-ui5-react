import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react";
import MyApp from "./MyApp";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
