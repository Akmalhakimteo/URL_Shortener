import Button from "./Button";
const ShortenURL = () => {
  return (
    <form className="add-form">
      <div className="form-control">
          <label>Shorten URL</label>
          <input type = 'text' placeholder = 'Insert your URL here'/>
      </div>
    </form>
  );
};

export default ShortenURL;
