import React from "react";
import Button from "./Button";
const PreviousURL = ({ previousURL }) => {
  return (
    <div className="task">
      <div >
        <h3>
          <a
            className="link"
            href={previousURL.shortURL}
            target="_blank"
            rel="noreferrer noopener"
          >
            {previousURL.shortURL}{" "}
          </a>
        </h3>
        <p className="overflow">{previousURL.actualURL}</p>
      </div>
      <Button text="copy" />
    </div>
  );
};

export default PreviousURL;
