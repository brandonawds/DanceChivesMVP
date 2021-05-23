import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import BreakingInfo from "./BreakingInfo";
import HipHopInfo from "./HipHopInfo";
import HouseInfo from "./HouseInfo";
import LockingInfo from "./LockingInfo";
import PoppingInfo from "./PoppingInfo";
import VogueingInfo from "./VogueingInfo";
import WaackingInfo from "./WaackingInfo";

const DanceStyles = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Styles</h2>
      <ul>
        <li>
          <Link to={`${url}/hip-hop`}>Hip-Hop</Link>
        </li>
        <li>
          <Link to={`${url}/breaking`}>Breaking</Link>
        </li>
        <li>
          <Link to={`${url}/popping`}>Popping</Link>
        </li>
        <li>
          <Link to={`${url}/house`}>House</Link>
        </li>
        <li>
          <Link to={`${url}/waacking`}>Waacking</Link>
        </li>
        <li>
          <Link to={`${url}/vogueing`}>Vogueing</Link>
        </li>
        <li>
          <Link to={`${url}/locking`}>Locking</Link>
        </li>
      </ul>
      {/* switch component for nested routes */}
      <Switch>
        <Route path={path}>
          <div>I am the styles of Dance Choose One! </div>
        </Route>
        <Route path={`${path}/hip-hop`}>
          <HipHopInfo />
        </Route>
        <Route path={`${path}/breaking`}>
          <BreakingInfo />
        </Route>
        <Route path={`${path}/popping`}>
          <PoppingInfo />
        </Route>
        <Route path={`${path}/house`}>
          <HouseInfo />
        </Route>
        <Route path={`${path}/waacking`}>
          <WaackingInfo />
        </Route>
        <Route path={`${path}/vogueing`}>
          <VogueingInfo />
        </Route>
        <Route path={`${path}/locking`}>
          <LockingInfo />
        </Route>
      </Switch>
    </div>
  );
};

export default DanceStyles;
