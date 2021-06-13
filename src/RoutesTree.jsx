import React from 'react';
import { Route, Switch } from 'react-router-dom';

// * Component Imports
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ResultsPage from './Pages/ResultsPage';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
// import DanceStyles from "./DanceStyles/DanceStyles";
import BreakingInfo from './Components/DanceStyles/BreakingInfo';
import HipHopInfo from './Components/DanceStyles/HipHopInfo';
import HouseInfo from './Components/DanceStyles/HouseInfo';
import LockingInfo from './Components/DanceStyles/LockingInfo';
import PoppingInfo from './Components/DanceStyles/PoppingInfo';
import VogueingInfo from './Components/DanceStyles/VogueingInfo';
import WaackingInfo from './Components/DanceStyles/WaackingInfo';
import FindEvents from './Components/EventComponents/FindEvents';
import RecentEvents from './Components/EventComponents/RecentEvents';
import SubmitEventInfo from './Components/EventComponents/SubmitEventInfo';

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
                <Route path="/resetpassword">
                    <ResetPassword />
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
                {/* do we want a dance styles page at all? kinda seems unecessary since we have the hover dropdown */}
                {/* <Route path="/styles">
          <DanceStyles />
        </Route> */}
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

                {/* event tab links */}
                <Route path={`/find_events`}>
                    <FindEvents />
                </Route>
                <Route path={`/recent_events`}>
                    <RecentEvents />
                </Route>
                <Route path={`/submit_event_info`}>
                    <SubmitEventInfo />
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
