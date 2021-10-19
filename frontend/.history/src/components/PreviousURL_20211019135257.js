import React from "react";

const PreviousURL = ({ previousURL }) => {
  return (
    <div className="task">
      <h3 >
        <a className="link" href={previousURL.shortURL}>{previousURL.shortURL} target = ""</a>
      </h3>
      <p>{previousURL.actualURL}</p>
    </div>
  );
};

export default PreviousURL;
