import "./Experience.css";

function Experience() {
  return (
    <div className="experienceContainer">
      <div className="sectionHeader">
        <h1>Work Experience</h1>
        <hr />
      </div>
      <div className="work">
        <div className="cisaWhole">
          <div className="cisaContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Seal_of_Cybersecurity_and_Infrastructure_Security_Agency.svg"
              alt="cisa"
            />
            <div className="cisaText">
              <h1> Student Trainee - Admin Support Assistant</h1>
              <h3> Cybersecurity and Infrastructure Security Agency</h3>
              <h5> January 2024 - Present</h5>
            </div>
          </div>
          <div className="cisaResume">
            <p>
              As a student trainee, I leveraged computer software tools to
              design flowcharts, manage and maintain spreadsheets and databases,
              analyze data, and create detailed reports. Additionally, I
              contributed to data collection efforts, supporting staff in
              studies and reports by delivering accurate and actionable
              insights.
            </p>
          </div>
        </div>
        <div className="DAWhole">
          <div className="DAContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Emblem_of_the_United_States_Department_of_the_Army.svg"
              alt="DA"
            />
            <div className="DAText">
              <h1> Student Trainee - Administrative and Office Support</h1>
              <h3> Department of the Army</h3>
              <h5> June 2022 - June 2023</h5>
            </div>
          </div>
          <div className="DAResume">
            <p>
              I was responsible for assisting the Chief of the Civilian
              Personnel Division with clerical tasks, including data entry,
              document filing, and scanning records into an electronic filing
              system to ensure accurate and efficient record management.
            </p>
          </div>
        </div>
        <div className="datafederalWhole">
          <div className="datafederalContainer">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQEu9SUB7-qoFw/company-logo_200_200/company-logo_200_200/0/1631346986973?e=1746057600&v=beta&t=le6lgUaBc7WRpOr7_H1n5IG3JiRICFVEoQtBqUVHsw8"
              alt="datafederal"
            />
            <div className="datafederalText">
              <h1> Scanning Technician</h1>
              <h3> Data Federal</h3>
              <h5> June 2021 - October 2021</h5>
            </div>
          </div>
          <div className="datafederalResume">
            <p>
              As a member of Data Federal's Document Management and Digitization
              division, I was responsible for conducting quality control checks
              to ensure the accuracy, completeness, and integrity of digitized
              materials.
            </p>
          </div>
        </div>
      </div>
      <div className="tools">
        <h1>Tools</h1>
        <div className="toolIcons">
          <img
            src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg"
            alt="html"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg"
            alt="css"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
            alt="js"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react"
          />
          <img
            src="https://nodejs.org/static/logos/nodejsDark.svg"
            alt="nodejs"
          />
          <img
            src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
            alt="python"
          />
          <img
            src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"
            alt="mysql"
          />
          <img src="https://www.r-project.org/logo/Rlogo.svg" alt="R" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
