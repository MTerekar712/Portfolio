import React from "react";
import "../pagesCss/card.css";
import photo1 from "../assets/PHOTO(2).webp";

const card = () => {
  return (
    <div className="card">
      <div className="photo1">
        <div className="photo" style={{backgroundImage:`url(${photo1})`}}></div>
      </div>
      <div className="info">
        {/* <h4>Hello!..</h4> */}
        <div className="mayu">
          <h1>I'm Mayur Terekar</h1>
          <h2>
            - Web Developer & <br />{" "}
            <h2 className="soft">SoftWare Developer</h2>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default card;
