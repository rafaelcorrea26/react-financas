import React from "react";
import "./styles.css";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <div className="resumeitem">
      <header className="header-resume-item"> 
      <p>{title}</p>        
        <Icon />
      </header>
      <span>{value}</span>
    </div>
  );
};

export default ResumeItem;
