import Button from "./Button";
import {useState} from 'react'
const ShortenURL = ({onShorten}) => {

    
  return (
    <form className="add-form">
      <div className="form-control">
          <label>Shorten URL</label>
          <div className = "buttonrow">
          <input type = 'text' placeholder = 'Insert your URL here'/>
          <Button text = 'shorten'/>
          </div>
      </div>
    </form>
  );
};

export default ShortenURL;
