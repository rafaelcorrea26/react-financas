import React from "react";
import "./styles.css";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";


interface ITransaction {
  id:number
  desc:string
  amount:number
  expense:number
}


const GridItem = ( item:ITransaction, onDelete: (id: number) => void) => {
  return (
    <tbody className="grid-item">
    <tr>
      <td>{item.desc}</td>
      <td>{item.amount}</td>
      <td>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </td>
      <td className="delete">
        <FaTrash onClick={() => onDelete(item.id)} />
      </td>
    </tr>
    </tbody>
  );
};

export default GridItem;
