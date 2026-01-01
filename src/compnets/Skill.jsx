import React from "react";
import "../pagesCss/skills.css";

// Import images from src/assets
import htmlLogo from "../assets/htmlLogo.webp";
import cssLogo from "../assets/cssLogo.webp";
import jsLogo from "../assets/jsLogo1.webp";
import reactLogo from "../assets/reactLog.webp";
import javaLogo from "../assets/javaLogo.webp";
import nodejsLogo from "../assets/nodejsLogo.webp";
import expressLogo from "../assets/expresslogo.webp";
import mongoLogo from "../assets/mogodb.webp";
import githubLogo from "../assets/github.webp";
import vscodeLogo from "../assets/vscode.webp";

const Skill = () => {
  return (
    <div>
      <h1 className="techskill">TECHNICAL SKILLS</h1>

      <div className="skills">

        {/* Frontend */}
        <div className="skill">
          <h1>Frontend Technologies</h1>
          <div className="logos">
            <div className="logo"><img src={htmlLogo} alt="HTML" /></div>
            <div className="logo"><img src={cssLogo} alt="CSS" /></div>
            <div className="logo"><img src={jsLogo} alt="JavaScript" /></div>
            <div className="logo"><img src={reactLogo} alt="React" /></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill">
          <h1>Backend Technologies</h1>
          <div className="logos">
            <div className="logo"><img src={javaLogo} alt="Java" /></div>
            <div className="logo"><img src={nodejsLogo} alt="NodeJS" /></div>
            <div className="logo"><img src={expressLogo} alt="Express" /></div>
          </div>
        </div>

        {/* Database */}
        <div className="skill">
          <h1>Database</h1>
          <div className="logos">
            <div className="logo"><img src={mongoLogo} alt="MongoDB" /></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill">
          <h1>Tools & Platforms</h1>
          <div className="logos">
            <div className="logo"><img src={githubLogo} alt="GitHub" /></div>
            <div className="logo"><img src={vscodeLogo} alt="VS Code" /></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skill;
