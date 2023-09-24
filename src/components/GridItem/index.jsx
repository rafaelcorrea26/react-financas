import React from "react";
import "./styles.css";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
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
      <td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </td>
    </tr>
    </tbody>
  );
};

export default GridItem;
