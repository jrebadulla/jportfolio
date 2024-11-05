import React from "react";
import "./RightContent.css";
import udemy from "./Image/udemy.png";

const RightContent = () => {
  return (
    <div className="right-content-container">
      <div className="about-me-container">
        <section id="about">
          <p>
            I began my programming journey in my first year of college, where I
            discovered my passion for coding. As part of my coursework, I
            contributed to our capstone project and participated in several
            other projects, which solidified my skills and enthusiasm for
            software development.
          </p>
          <p>
            To further enhance my knowledge, I took an online course titled{" "}
            <a
              className="link-udemy"
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/37350652?start=0#overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
              Javascript, Node, React, PostgreSQL, Web3 and DApps
            </a>{" "}
            on{" "}
            <a
              className="link-udemy"
              href="https://www.udemy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Udemy
              <img src={udemy} alt="Udemy Logo" className="udemy-logo" />
            </a>
            . This training allowed me to dive deeper into the world of web
            development. Shortly after, I had the opportunity to work with a
            client on a project called Ultimate Trivia, a web app that combines
            my love for programming with interactive learning.
          </p>
          <p>
            When I'm not coding, I enjoy staying active by doing household
            chores, going for jogs, or engaging in home workouts. I believe in
            maintaining a healthy balance between work and personal life, which
            keeps me motivated and focused.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RightContent;
