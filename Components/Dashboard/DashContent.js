import React from "react";

const DashContent = () => {
  return (
    <div className="mainContent">
      <div className="mainContent-main">
        <div className="mainContent-main-first">
          <h1>Welcome to the Elly AI Platform</h1>
        </div>
        <div className="mainContent-main-second">
          <div className="mainContent-main-second-first">
            <h2>Go threw our availibility</h2>
          </div>
          <div className="mainContent-main-second-second">
            <div className="mainContent-main-second-box">
              <h4>Quickstart tutorial</h4>
              <h6>Learn by building a quick sample app</h6>
            </div>
            <div className="mainContent-main-second-box">
              <h4>Examples</h4>
              <h6>Explore some example tasks</h6>
            </div>
          </div>
        </div>
        <div className="mainContent-main-third">
          <h2>Explore our Applications</h2>
        </div>
      </div>
    </div>
  );
};

export default DashContent;
