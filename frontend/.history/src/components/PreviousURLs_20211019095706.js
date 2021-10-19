import React from "react";


const PreviousURLs = () => {
  

  return (
    <div>
      {PreviousURLs.map((url) => (
        <h3 key={url.id}>{url.shortURL}</h3>
      ))}
    </div>
  );
};

export default PreviousURLs;
