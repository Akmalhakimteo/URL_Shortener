import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>
        <a href="www.github.com/akmalhakimteo">Github Link</a>
      </h4>
      <Link to = '/'>Back</Link>
    </div>
  );
};

export default About;
