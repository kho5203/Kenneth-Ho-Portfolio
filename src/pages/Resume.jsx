import resume from "./Linkedin_Resume_Kenneth_Ho.pdf";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <iframe
        src={resume}
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default Resume;
