import Button from "./Button";
import {useState} from 'react'
const ShortenURL = ({onShorten}) => {
 const [shortURL,sethortURL] = useState('')

 

 const onSubmit = (e) => {
     e.preventDefault()
     if(!URL){
         alert('Please insert a URL')
         return
     }
     onShorten({shortURL})
     setURL('')
 }



  return (
    <form className="add-form" onSubmit = {onSubmit}>
      <div className="form-control">
          <label>Shorten URL</label>
          <div className = "buttonrow">
          <input type = 'text' placeholder = 'Insert your URL here' value = {URL} onChange = {(e)=>setURL(e.target.value)}/>
          <Button text = 'shorten' />
          </div>
      </div>
    </form>
  );
};

export default ShortenURL;
