import React from "react";
import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Avatar } from "@ui5/webcomponents-react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

import "@ui5/webcomponents-icons/dist/add.js";

const MyApp = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("./");
  };

  return (
    <>
      <ShellBar
        logo={<img src="reactLogo.png" alt="logo" />}
        profile={<Avatar image="profilePictureExample.png" />}
        primaryTitle={"My App"}
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem icon="add" text="Add" />
      </ShellBar>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
};

export default MyApp;
