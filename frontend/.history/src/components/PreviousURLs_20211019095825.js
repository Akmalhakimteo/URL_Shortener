import React from "react";


const PreviousURLs = ({previousURLs}) => {
  

  return (
    <div>
      {previousURLs.map((url) => (
        <h3 key={url.id}>{url.shortURL}</h3>
      ))}
    </div>
  );
};

export default PreviousURLs;
