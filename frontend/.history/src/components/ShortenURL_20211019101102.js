import Button from "./Button";
import {useState} from 'react'
const ShortenURL = ({onShorten}) => {
 const [URL,setURL] = useState('')

 const onClick = ( ) => {
    console.log('click from ShortenURL')
  }

 const onSubmit = (e) => {
     e.preventDefault()
     if(!URL){
         alert('Please insert a URL')
         return
     }
     setURL('')
 }

 const shortenURL = () => {
     console.log(url)
 }

  return (
    <form className="add-form" onSubmit = {onSubmit}>
      <div className="form-control">
          <label>Shorten URL</label>
          <div className = "buttonrow">
          <input type = 'text' placeholder = 'Insert your URL here' value = {URL} onChange = {(e)=>setURL(e.target.value)}/>
          <Button text = 'shorten' onClick= {onClick}/>
          </div>
      </div>
    </form>
  );
};

export default ShortenURL;
