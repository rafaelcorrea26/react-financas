import React from "react";
import "./styles.css";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";


interface GridItemProps {
  onDelete: (id: number) => void;
  item:Transacao;
}

const GridItem = (props: GridItemProps) => {
  return (
    <tbody className="grid-item">
    <tr>
      <td>{props.item.desc}</td>
      <td>{props.item.quantidade}</td>
      <td>
        {props.item.ehDespesa ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </td>
      <td className="delete">
        <FaTrash onClick={() => props.onDelete(props.item.id)} />
      </td>
    </tr>
    </tbody>
  );
};

export default GridItem;
