import React from "react";
import GridItem from "../GridItem";
import './styles.css';

interface GridProps {
  itens:Array<Transaction>;
  setItens: (transactionsList: Array<Transaction>) => void;
}

const Grid = (props:GridProps) => {
  const onDelete = (id: number) => {
    const newArray = props.itens.filter((transaction:Transaction) => transaction.id !== id);
    props.setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th></th>
          </tr>
        </thead>

          {props.itens?.map((item:Transaction) => (<GridItem item={item} onDelete={onDelete} />
          ))}

      </table>
    </div>
  );
}

export default Grid;
