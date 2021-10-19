import React from "react";
import {useState} from "react";

const prevURLs = ;

const PreviousURLs = () => {
const [PreviousURLs,setPreviousURLs] = useState([
    
])

  return (
    <div>
      {prevURLs.map((url) => (
        <h3 key = {url.id}>{url.shortURL}</h3>
      ))}
    </div>
  );
};

export default PreviousURLs;
