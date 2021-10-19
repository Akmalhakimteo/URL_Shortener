import Button from "./Button";
const ShortenURL = () => {
  return (
    <form className="add-form">
      <div className="form-control buttonrow">
          <label>Shorten URL</label>
          <input type = 'text' placeholder = 'Insert your URL here'/>
          <Button text = 'shorten'/>
      </div>
    </form>
  );
};

export default ShortenURL;
