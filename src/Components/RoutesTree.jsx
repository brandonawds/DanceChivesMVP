import React from "react";
import { Route, Switch } from "react-router-dom";

// * Component Imports
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Header from "./SharedComponents/Header";
import ResultsPage from "./Results/ResultsPage";
import AboutPage from "./About/About";
import ContactPage from "./Contact/Contact";
import DanceStyles from "./DanceStyles/DanceStyles";
import BreakingInfo from "./DanceStyles/BreakingInfo";
import HipHopInfo from "./DanceStyles/HipHopInfo";
import HouseInfo from "./DanceStyles/HouseInfo";
import LockingInfo from "./DanceStyles/LockingInfo";
import PoppingInfo from "./DanceStyles/PoppingInfo";
import VogueingInfo from "./DanceStyles/VogueingInfo";
import WaackingInfo from "./DanceStyles/WaackingInfo";

const RoutesTree = () => {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/results">
          <ResultsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/styles">
          <DanceStyles />
        </Route>
        <Route path={`/hip-hop`}>
          <HipHopInfo />
        </Route>
        <Route path={`/breaking`}>
          <BreakingInfo />
        </Route>
        <Route path={`/popping`}>
          <PoppingInfo />
        </Route>
        <Route path={`/house`}>
          <HouseInfo />
        </Route>
        <Route path={`/waacking`}>
          <WaackingInfo />
        </Route>
        <Route path={`/vogueing`}>
          <VogueingInfo />
        </Route>
        <Route path={`/locking`}>
          <LockingInfo />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default RoutesTree;

/* nested styles routes */
