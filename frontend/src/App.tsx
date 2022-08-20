import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "features/Common/LandingPage";
import { Navbar } from "features/Common/Navbar";
import { Footer } from "features/Common/Footer";
import { ResetPasswordForm } from "features/Common/Account/ResetPasswordForm";
import "./App.scss";
import "primereact/resources/themes/arya-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Rs3PlayerLandingPage from "features/RS3/Player/Rs3PlayerLandingPage";
import OsrsPlayerLandingPage from "features/OSRS/Player/OsrsPlayerLandingPage";
import Rs3PlayerComparison from "features/RS3/Player/Compare/Rs3PlayerComparison";
import Rs3PlayerComparisonHome from "features/RS3/Player/Compare/Rs3PlayerComparisonHome";
function initializeReactGA() {
  ReactGA.initialize("UA-178282727-1");
  ReactGA.pageview("/homepage");
}
initializeReactGA();

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LandingPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
