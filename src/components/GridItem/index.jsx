import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td>{item.desc}</td>
      <td>{item.amount}</td>
      <td alignCenter>
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
  );
};

export default GridItem;
