import React from "react";
// import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      {/* Work History */}
      <div className="resume-section">
        <h2>Work History</h2>
        <div className="resume-item">
          <h3>
            AI Training Specialist <span>(2025 – Present)</span>
          </h3>
          <p className="resume-sub">Private Contract</p>
          <p>
            Contributes to AI model development by testing, writing, and
            comparing code across HTML, Python, React, and JavaScript. Provides
            feedback to refine AI output and improve model accuracy.
          </p>
        </div>

        <div className="resume-item">
          <h3>
            Web and Mobile Development <span>(2020 – Present)</span>
          </h3>
          <p className="resume-sub">Private Contract</p>
          <p>
            Builds and refines front‑end and back‑end code for responsive web
            and mobile experiences. Focuses on clean performance, strong
            security, and smooth interaction.
          </p>
        </div>

        <div className="resume-item">
          <h3>
            Full‑Stack Internship <span>(2020)</span>
          </h3>
          <p className="resume-sub">Molica</p>
          <p>
            Worked on an Ionic app using TypeScript and React. Improved scroll
            functions in the app’s calendar and organized codebase into reusable
            parts.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>
            UX Design Course <span>(2025 – Present)</span>
          </h3>
          <p className="resume-sub">Google, Coursera</p>
          <p>
            Expands skills in UX research, prototyping, and ideation. Includes
            hands‑on experience with user interviews, wireframing, and usability
            testing.
          </p>
        </div>

        <div className="resume-item">
          <h3>
            B.S. in Computer Science <span>(2023)</span>
          </h3>
          <p className="resume-sub">Southern New Hampshire University</p>
          <p>
            Earned a Bachelor of Science in Software Engineering with a 4.0 GPA.
            Coursework included full‑stack development, system architecture, and
            cybersecurity.
          </p>
        </div>

        <div className="resume-item">
          <h3>
            Web and Mobile Development <span>(2020)</span>
          </h3>
          <p className="resume-sub">Epicodus, Portland, OR</p>
          <p>
            Completed an intensive coding bootcamp with pair‑programming.
            Strengthened communication and teamwork skills.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="resume-section">
        <h2>Skills</h2>
        <div className="skills-filter">
          <button>All</button>
          <button>UX</button>
          <button>Software</button>
        </div>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>UX Design</li>
          <li>Accessibility</li>
          <li>Figma</li>
          <li>Problem Solving</li>
          <li>Communication</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
