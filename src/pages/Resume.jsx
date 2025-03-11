import resume from "./Resume_Kenneth.docx.pdf";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <iframe src={resume}></iframe>
    </div>
  );
}

export default Resume;
