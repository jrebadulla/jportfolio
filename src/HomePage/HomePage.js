import { React, useState, useEffect } from "react";
import "./HomePage.css";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import php from "./Image/php.png";
import physics from "./Image/physics.png";
import text from "./Image/text.png";
import git from "./Image/github.png";
import html from "./Image/html-5.png";
import javascript from "./Image/java-script.png";
import gif from "./Image/please.gif";
import sad from "./Image/sad.gif";
import RightContent from "./RightContent";
import Experience from "./Experience";
import HireMeModal from "./HireMeModal";
import cSharp from "./Image/cSharp.png";
import gitlab from "./Image/gitlab.png";
import Project from "./Project";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredOnce, setHoveredOnce] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const [isModalOpen, setModalOpen] = useState(false);

  // document.addEventListener('contextmenu', event => event.preventDefault());

  const handleHireMeClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoveredOnce(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-container" onMouseMove={handleMouseMove}>
      <div
        className="cursor-glow"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      <div class="navbar-container">
        <nav class="navbar">
          <ul class="navbar-list">
            <li
              className={`navbar-item item-about ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => handleNavClick("about")}
            >
              About
            </li>
            <li
              className={`navbar-item item-exp ${
                activeSection === "experience" ? "active" : ""
              }`}
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </li>
            <li
              className={`navbar-item item-project ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </li>
          </ul>
        </nav>
      </div>
      <div className="left-container">
        <h1>Hi, I'm</h1>
        <h2>Jellian Rebadulla</h2>
        <p className="tagline">A passionate Web Developer</p>
        <div className="icons">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined className="icon" />
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined className="icon" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined className="icon" />
          </a>
          <div className="hire-me-container">
            <button
              className="add-me"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleHireMeClick}
            >
              <UserAddOutlined /> Hire me
            </button>

            <div className="gif-container">
              <img
                src={gif}
                alt="Please Hire Me GIF"
                className={`hire-gif ${isHovered ? "visible" : ""}`}
              />
              {hoveredOnce && (
                <img
                  src={sad}
                  alt="Sad GIF"
                  className={`new-hire-gif ${!isHovered ? "visible" : ""}`}
                />
              )}
            </div>
          </div>
        </div>

        <h3>My Tech Stack</h3>
        <div className="tech-stack">
          <div className="tech-stack-inner">
            <div className="tech-stack-item">
              <img src={git} alt="Git" className="tech-icon" />
              <p>Git</p>
            </div>
            <div className="tech-stack-item">
              <img src={php} alt="PHP" className="tech-icon" />
              <p>PHP</p>
            </div>
            <div className="tech-stack-item">
              <img src={physics} alt="React JS" className="tech-icon" />
              <p>ReactJs</p>
            </div>
            <div className="tech-stack-item">
              <img src={text} alt="CSS" className="tech-icon" />
              <p>CSS</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="HTML" className="tech-icon" />
              <p>HTML</p>
            </div>
            <div className="tech-stack-item">
              <img src={javascript} alt="Javascript" className="tech-icon" />
              <p>JavaScript</p>
            </div>
            <div className="tech-stack-item">
              <img src={cSharp} alt="Javascript" className="tech-icon" />
              <p>C-Sharp</p>
            </div>
            <div className="tech-stack-item">
              <img src={gitlab} alt="Javascript" className="tech-icon" />
              <p>gitlab</p>
            </div>
          </div>
        </div>
      </div>
      <div className="for-mobile-view">
      <div className="right-container">
        <section id="about" className="section">
          <RightContent />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Project />
        </section>
      </div>
      {isModalOpen && <HireMeModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default HomePage;
