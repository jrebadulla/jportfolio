import React from "react";
import "./Project.css";
import trivia from "./Image/trivia.png";
import trivia1 from "./Image/trivia1.png";
import trivia2 from "./Image/trivia2.png";
import { LinkOutlined } from "@ant-design/icons";

const Project = () => {
  return (
    
    <div className="Exp-container">
          <section id="projects" className="section">
      <div className="job-card">
        <div className="img-container">
          <img src={trivia} alt="Ultimate Trivia" className="project-image" />
          <img src={trivia1} alt="Ultimate Trivia" className="project-image" />
          <img src={trivia2} alt="Ultimate Trivia" className="project-image" />
        </div>
        <h2>
          <a
            className="link"
            href="https://ultimate-trivia.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ultimate Trivia <LinkOutlined className="link-icon" />
          </a>
        </h2>
        <p className="job-description">
          A web application featuring an interactive quiz game and an ultimate
          trivia component. This project aims to deliver an engaging and
          educational experience for users.
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

export default Project;
