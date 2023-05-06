import React from "react";

const User = ({ data }) => {
  return (
    <div className="user">
      <div className="avatarPic">
        <img src="/images/divu.jpg" alt="Avatar" className="avatarImg" />
      </div>
      <div className="main-content">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default User;
