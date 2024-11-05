import React from "react";
import "./HireMeModal.css";
import sad from "./Image/bye.gif";

const HireMeModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-container">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <img className="hover-gif" src={sad} alt="Hover effect" />
        </div>
        <h2 className="modal-title">
          🚀 Let's Collaborate on Your Next Project!
        </h2>
        <p className="modal-message">
          I'm passionate about bringing ideas to life and can't wait to hear
          about your vision.
        </p>
        <form className="hire-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Tell me about the opportunity!"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
