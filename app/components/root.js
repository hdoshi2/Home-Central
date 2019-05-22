import React, { Component } from "react";
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
import Home from "./Home";
import { getApartmentThunk } from "../reducers/apartment";
import { getBuildingThunk } from "../reducers/building";

class Root extends Component {
  componentDidMount() {
    this.props.fetchApartmentList();
    this.props.fetchBuildingList();
  }
  render() {
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
                <Link to="/"> HOME </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apartment" component={Apartment} />
            <Route exact path="/building" component={Building} />
            {/* <Route exact path="/landlord" component={Apartment} /> */}
          </Switch>
          {/* <footer className="flexContainer flexCenter blueBackground whiteText height50">
            &copy; H+P
          </footer> */}
        </div>
      </Router>
    );
  }
}

//get student and campus data from db and update state in studentReducer & campusReducer
const mapDispatchToProps = dispatch => {
  return {
    fetchApartmentList: () => dispatch(getApartmentThunk()),
    fetchBuildingList: () => dispatch(getBuildingThunk())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Root);
