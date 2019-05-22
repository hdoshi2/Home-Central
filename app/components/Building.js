import React from "react";
import { connect } from "react-redux";

export const Building = props => {
  const { buildingList } = props;
  return (
    <div className="flexContainer flexColumn fullHeight whiteBackground">
      <div className="flexContainer flexItem">
        <main className="flexItem whiteBackground main">
          <div className="itemstest">
            {buildingList.map(building => (
              <div key={building.id} className="item">
                <p>Building: {building.buildingName}</p>
                <p>Unit: {building.address}</p>
                <img src={building.imageUrl} width="200px" height="auto" />
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
    buildingList: state.buildingReducer
  };
};

export default connect(mapStatetoProps)(Building);
