import resume from "./Linkedin_Resume_Kenneth_Ho.docx.pdf";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <iframe src={resume}></iframe>
    </div>
  );
}

export default Resume;
