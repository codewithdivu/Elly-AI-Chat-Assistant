import React from "react";

const Sidebar = ({ active, setActive }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="sidebar-header-btn">
          <span>+</span> New chat
        </button>
      </div>

      <div className="sidebar-main">
        {Array.apply(null, Array(5)).map((item, index) => (
          <div
            key={index}
            className={`sidebar-main-item ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <i
              style={{ marginLeft: index != active ? "-2.5rem" : "-1rem" }}
              className="fa fa-message"
            />
            <p style={{ marginLeft: index != active ? "-10rem" : "-2.5rem" }}>
              How are you?
            </p>

            {index === active && (
              <i
                className="fa fa-edit"
                style={{
                  marginRight: "-3rem",
                }}
              />
            )}
            {index === active && (
              <i
                className="fa fa-trash"
                style={{
                  marginRight: "-1.2rem",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-footer-item">
          <i style={{ marginLeft: "-1rem" }} className="fa fa-user" />
          <p style={{ marginLeft: "-2.5rem" }}>Upgrade to Plus</p>
          <button className="sidebar-footer-btn">New</button>
        </div>
        <div className="sidebar-footer-item">
          {/* <i style={{ marginLeft: "-1.8rem" }} className="fa fa-user" /> */}
          <img
            style={{ marginLeft: "-2rem" }}
            src="/images/divu.jpg"
            alt="Avatar"
            className="avatar"
          />

          <p style={{ marginLeft: "-4.5rem" }}>Divyesh Mavadiya</p>
          <i
            style={{ marginLeft: "-1rem" }}
            className="fa fa-ellipsis-vertical"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
