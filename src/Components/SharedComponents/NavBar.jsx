import React, { useState, useEffect } from "react";
// * Component Imports
import SearchBar from "./SearchBar";
// * Utils Imports
// import { redirect } from "../../utils/routerTools";
// *react-router imports
import {
  useHistory,
  Link,

  // useLocation,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";
import DanceStyles from "../DanceStyles/DanceStyles";
import firebase from "../../utils/firebase";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setLoggedInUser(user);
      } else {
        // No user is signed in.
        console.log("No user is currently logged in");
      }
    });
  });

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("You are now signed out.");
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const Login = () => {
    history.push("/login");
  };

  let history = useHistory();
  const [toggleStyles, setStylesToggle] = useState(false);
  const [toggleEvents, setEventsToggle] = useState(false);

  const handleRedirect = (path) => {
    history.push(`${path}`);
  };

  const toggleMenu = (category) => {
    category === "styles"
      ? setStylesToggle((prev) => !prev)
      : setEventsToggle((prev) => !prev);
  };

  return (
    <div className="navBar">
      <p>Logo</p>
      <div className={toggleStyles ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu2"
            onClick={() => toggleMenu("styles")}
          >
            <span>Styles</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content">
            <li className="dropdown-item">
              <Link to={"hip-hop"}>Hip-Hop</Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/breaking"} replace>
                Breaking
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/popping"} replace>
                Popping
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/house"} replace>
                House
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/waacking"} replace>
                Waacking
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/locking"} replace>
                Locking
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to={"/vogueing"} replace>
                Vogue-ing
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className={toggleEvents ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu2"
            onClick={() => toggleMenu("events")}
          >
            <span>Events</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <Link to={"/find_events"}>Find Events</Link>
            </div>
            <div className="dropdown-item">
              <Link to={"/recent_events"}>Recent Events</Link>
            </div>
            <div className="dropdown-item">
              <Link to={"/submit_event_info"}>Submit Event Info</Link>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"}>Home</Link>
      {/* <Link to={"/styles"}>Styles</Link> */}
      <Link to={"/events"}>Events</Link>
      <SearchBar />
      {loggedInUser ? (
        <button onClick={signOut}>Logout </button>
      ) : (
        <button onClick={Login}>Sign In</button>
      )}
    </div>
  );
};

export default NavBar;
