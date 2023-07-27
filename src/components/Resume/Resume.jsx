import "./Resume.css";
import resume from "./Resume.pdf";

const Resume = () => <embed className="Resume" src={resume}></embed>;

export default Resume;