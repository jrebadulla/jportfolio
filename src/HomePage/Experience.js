import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="Exp-container">
    <section id="experience" className="section">
      <div className="job-card">
        <p className="job-duration">2024 — PRESENT</p>
        <h2 className="job-title">
          On-the-Job Training at Gradenia Bakeries Phil Inc. in the MIS
          Department
        </h2>
        <p className="job-description">
          I was responsible for developing a transactional project from scratch,
          conducting daily sync-ups to ensure alignment with team objectives,
          and collaborating with team members using Git for version control and
          project management.
        </p>
        <div className="skills">
          <span className="skill">React Js</span>
          <span className="skill">Php Laravel</span>
          <span className="skill">Github</span>
        </div>
      </div>
      <div className="job-card">
        <p className="job-duration">2024 — PRESENT</p>
        <h2 className="job-title">Freelancing</h2>
        <p className="job-description">
          I had a student client for whom I designed and developed a
          comprehensive web application featuring an interactive quiz game and
          an ultimate trivia component. This project aimed to deliver an
          engaging and educational experience for users.
        </p>
        <div className="skills">
          <span className="skill">React Js</span>
          <span className="skill">Firebase</span>
          <span className="skill">Github</span>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Experience;
