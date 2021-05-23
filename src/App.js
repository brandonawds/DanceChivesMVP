import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// * Component Imports
import RoutesTree from "./Components/RoutesTree";
import Header from "./Components/SharedComponents/Header";
import Footer from "./Components/SharedComponents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
