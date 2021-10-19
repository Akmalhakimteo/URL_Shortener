import React from "react";
import PreviousURL from "./PreviousURL";

const PreviousURLs = ({previousURLs}) => {
  

  return (
    <div>
      {previousURLs.map((url) => (
        <PreviousURL
      ))}
    </div>
  );
};

export default PreviousURLs;
