import React from 'react';
import './App.css';
import "./components/SideNavBar.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNavBar from "./components/SideNavBar";
import Favorites from "./components/Favorites";
import People from "./components/People";
import Policies from "./components/Policies";
import Management from "./components/Management";

export default function App() {

  return (
    <Router>
    <div id="wrapper" class="m-5 bg-white">
        <SideNavBar />



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/policies">
            <Policies />
          </Route>
          <Route path="/management">
            <Management />
          </Route>
        </Switch>
    </div>
    </Router>
  )
};