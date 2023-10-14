import React from "react";
import "./styles.css";
import { IconType } from "react-icons";


interface ResumeItemProps  {
  titulo: string
  Icon: IconType
  valor: string
}

const ResumeItem = ({ titulo, Icon, valor }:ResumeItemProps) => {
  return (
    <div className="resumeitem">
      <header className="header-resume-item"> 
      <p>{titulo}</p>        
        <Icon />
      </header>
      <span>{valor}</span>
    </div>
  );
};

export default ResumeItem;
