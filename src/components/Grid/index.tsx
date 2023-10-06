import React from "react";
import GridItem from "../GridItem";
import './styles.css';


interface ITransaction {
  id: number,
  desc: string,
  amount: number,
  expense: boolean,
}



const Grid = ( itens:Array<ITransaction>, setItens: (id: number) => void ) => {
  const onDelete = (id: number) => {
    const newArray = itens.filter((transaction:ITransaction) => transaction.id !== id);
    setItens;
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

          {itens?.map((item:ITransaction, index:number) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}

      </table>
    </div>
  );
}

export default Grid;
