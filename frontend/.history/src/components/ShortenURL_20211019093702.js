import Button from "./Button";
import {useState} from 'react'
const ShortenURL = ({onShorten}) => {
 const [URL,setURL] = useState('')

 const onSubmit = (e) => {
     e.preventDefault()
     console.log("Submitted")
 }

  return (
    <form className="add-form" onSu>
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
