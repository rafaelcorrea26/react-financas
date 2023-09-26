import React from "react";
import ResumeItem from "../ResumeItem";
import "./styles.css";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

interface ResumeProps  {
  income: string
  expense: string
  total: string
}


const Resume = ({ income, expense, total }:ResumeProps) => {
  return (
    <div className="resume">
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </div>
  );
};

export default Resume;
