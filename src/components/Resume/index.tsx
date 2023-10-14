import React from "react";
import ResumeItem from "../ResumeItem";
import "./styles.css";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

interface ResumeProps  {
  renda: number
  despesa: number
  total: number
}


const Resume = ({ renda, despesa, total }:ResumeProps) => {
  function valorMaiorQueZero(valor:number):string {
    if (valor > 0 ){
      return `R$ ${valor}`;
    } else return "R$ 0.00";
  }

  function valorTotal(renda:number, despesa:number, total:number):string {
    if (total > 0 ){
      if (renda < despesa){
        return `R$ -${total}`;
      } else {
        return `R$ ${total}`;
      }   
    } else { return "R$ 0.00";}
  }


  return (
    <div className="resume">
      <ResumeItem
        titulo="Entradas"
        Icon={FaRegArrowAltCircleUp}
        valor={valorMaiorQueZero(renda)}
      />
      <ResumeItem
        titulo="Saídas"
        Icon={FaRegArrowAltCircleDown}
        valor={valorMaiorQueZero(despesa)}
      />
      <ResumeItem titulo="Total" Icon={FaDollarSign} valor={valorTotal(renda,despesa,total)} />
    </div>
  );
};

export default Resume;
