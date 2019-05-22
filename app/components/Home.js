import React from "react";
import { connect } from "react-redux";

export const Apartment = props => {
  return (
    <div className="home">
      <hr />
      <h1>WELCOME SCREEN</h1>
      <img
        src="https://achieve.lausd.net/cms/lib/CA01000043/Centricity/domain/779/welligentbuttons/WelligentHome.png"
        width="200px"
        height="auto"
      />
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Streamline maintenance and operations.
              </h5>
              <p className="card-text">
                Save your employees time, delight your residents, and give you
                the insights on your building that you need to tackle issues and
                avoid costly mistakes. Our central dashboard lets you track,
                search, and monitor everything that matters.
              </p>
              <a href="#" className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Keep track of packages, valuables, and guests.
              </h5>
              <p className="card-text">
                The system automatically notifies residents, board members, and
                staff, based on their role and notification preferences. In case
                of an emergency, management has the power to broadcast
                announcements using voice, text, and email.
              </p>
              <a href="#" className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Keep residents engaged and informed.
              </h5>
              <p className="card-text">
                The system automatically notifies residents, board members, and
                staff, based on their role and notification preferences. In case
                of an emergency, management has the power to broadcast
                announcements using voice, text, and email.
              </p>
              <a href="#" className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Get building data and insights, seamlessly.
              </h5>
              <p className="card-text">
                BuildingLink's secure integration engine imports data from your
                favorite accounting software to keep resident data up-to-date.
              </p>
              <a href="#" className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
