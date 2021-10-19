import Button from "./Button";
const ShortenURL = () => {
  return (
    <form className="add-form flex">
      <div className="form-control">
          <label>Shorten URL</label>
          <input type = 'text' placeholder = 'Insert your URL here'/>
          <Button text = 'shorten'/>
      </div>
    </form>
  );
};

export default ShortenURL;
