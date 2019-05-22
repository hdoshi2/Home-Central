import React from "react";
import { connect } from "react-redux";

export const Apartment = props => {
  const { apartmentList } = props;
  // console.log("apartmentList", apartmentList);
  return (
    <div className="flexContainer flexColumn fullHeight whiteBackground">
      <div className="flexContainer flexItem">
        <main className="flexItem whiteBackground main">
          <div className="itemstest">
            {apartmentList.map(apartment => (
              <div key={apartment.id} className="item">
                <p>Building: {apartment.building.buildingName}</p>
                <p>Unit: {apartment.unit}</p>
                <p>Bedrooms: {apartment.bedrooms}</p>
                <p>Bathrooms: {apartment.bathrooms}</p>
                <p>Square Footage: {apartment.squareFootage} sf</p>
              </div>
            ))}
          </div>
        </main>
        <aside className="sidebar sidebarLeft">
          <h2>Left Sidebar</h2>
          <p>Put your content here</p>
        </aside>
        <aside className="sidebar sidebarRight">
          <h2>Right Sidebar</h2>
          <p>Put your content here</p>
        </aside>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  console.log("state", state);
  return {
    apartmentList: state.apartmentReducer
  };
};

export default connect(mapStatetoProps)(Apartment);
