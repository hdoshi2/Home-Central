import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import Building from "./Building";
import Apartment from "./Apartment";
import Landlord from "./Landlord";

const Root = () => {
  return (
    <Router>
      <div>
        <nav className="flexContainer blueBackground">
          <ul className="nav flexItem flexStart">
            <li>
              <h1 href="#">Home Central</h1>
            </li>
          </ul>
          <ul className="nav flexContainer flexEnd">
            <li>
              <Link to="/building">BUILDINGS </Link>
            </li>
            <li>
              <Link to="/apartment"> APARTMENTS </Link>
            </li>
            <li>
              <Link to="/landlord"> LANDLORD </Link>
            </li>
            <li>
              <a href="#">HOME</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/building" component={Building} />
          <Route exact path="/apartment" component={Apartment} />
          <Route exact path="/landlord" component={Apartment} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
