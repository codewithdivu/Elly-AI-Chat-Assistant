import React from "react";
import User from "./User";
import AiBot from "./AiBot";
import { contents } from "@/Constants/metadata";

const MainContent = () => {
  return (
    <div className="main">
      {contents.map((item, index) => (
        <div key={index}>
          <User data={item.userContent} />
          <AiBot data={item} />
        </div>
      ))}
    </div>
  );
};

export default MainContent;
