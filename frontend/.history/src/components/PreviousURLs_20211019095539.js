import React from "react";
import {useState} from "react";

const prevURLs = ;

const PreviousURLs = () => {
const [PreviousURLs,setPreviousURLs] = useState([
    {
      id: 1,
      shortURL: "bit.ly/12312dfa",
      longURL:
        "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    },
    {
      id: 1,
      shortURL: "bit.ly/12312dfa",
      longURL:
        "https://www.notion.so/Docker-Containers-3a875a6e9da343fda627775d77ae3290",
    },
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
