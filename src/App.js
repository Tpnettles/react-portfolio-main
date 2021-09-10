import React from "react";
import "./App.css";
import MainPage from "../src/components/MainPage";
import ContactInfo from "./views/ContactInfo";
import Interview from "./views/Interview";
import Resume from "./views/Resume"
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Route exact path="/main" component={MainPage} />
        <Route exact path="/contact" component={ContactInfo} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="/resume" component={Resume} />
      </Router>
    </div>
  );
}

export default App;
