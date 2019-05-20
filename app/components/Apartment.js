import React from "react";
import { connect } from "react-redux";

export const Students = props => {
  const { apartmentList } = props;
  console.log("props", props);
  return (
    <div className="flexContainer flexColumn fullHeight whiteBackground">
      <div className="flexContainer flexItem">
        <main className="flexItem whiteBackground main">
          <p>Put Content Here</p>
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
      <footer className="flexContainer flexCenter blueBackground whiteText height50">
        &copy; H+P
      </footer>
    </div>
  );
};

const mapStatetoProps = state => {
  console.log("state", state);
  return {
    studentsList: state.apartmentReducer
  };
};

export default connect(mapStatetoProps)(Students);
