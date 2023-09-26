import React from "react";
import "./styles.css";
import { IconType } from "react-icons";


interface ResumeItemProps  {
  title: string
  Icon: IconType
  value: string
}

const ResumeItem = ({ title, Icon, value }:ResumeItemProps) => {
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
