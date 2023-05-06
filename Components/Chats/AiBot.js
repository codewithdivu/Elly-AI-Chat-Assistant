import React, { useState } from "react";

const AiBot = ({ data }) => {
  return (
    <div className="ai">
      <div className="avatarPic">
        <img src="/images/ai.png" alt="Avatar" className="avatarImg" />
      </div>
      <div className="main-content">
        <p>{data.aiContent[0]}</p>
      </div>
    </div>
  );
};

export default AiBot;
