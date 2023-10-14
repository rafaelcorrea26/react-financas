import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";

interface AppProps  {
  renda: number
  despesa: number
  total: number
}

interface IItem  {
  ehDespesa: boolean
}


const App = ({ renda, despesa, total}:AppProps) => {
  
  const data = localStorage.getItem("transactions");
  const [listaTransacoes, setListaTransacoes] = useState(
    data ? JSON.parse(data) : []
  );
  const [rendaManipulada, setRenda] = useState<number>(0);
  const [despesaManipulada, setDespesa] = useState<number>(0);
  const [totalManipulado, setTotal] = useState<number>(0);

  useEffect(() => {
    const qtdDespesa = listaTransacoes
      .filter((item:IItem) => item.ehDespesa)
      .map((transacao:Transacao) => {if(transacao.ehDespesa) return transacao.quantidade});

    const qtdeRenda = listaTransacoes
      .filter((item:IItem) => !item.ehDespesa)
      .map((transacao:Transacao) => {if(!transacao.ehDespesa) return transacao.quantidade});

    despesa = qtdDespesa.reduce((acc:number, cur:number) =>  acc + cur, 0).toFixed(2);
    renda = qtdeRenda.reduce((acc:number, cur:number) => acc + cur, 0).toFixed(2);
    total = Number(Math.abs(Number(renda) - Number(despesa)).toFixed(2));

    setRenda(renda);
    setDespesa(despesa);
    setTotal(total);
  }, [listaTransacoes]);

  const handleAdd = (transacao:Transacao) => {
    const newArrayTransacoes = [...listaTransacoes, transacao];

    setListaTransacoes(newArrayTransacoes);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransacoes));
  };

  return (
    <>
      <Header />
      <Resume renda={rendaManipulada} despesa={despesaManipulada} total={totalManipulado} />
      <Form
        handleAdd={handleAdd}
        listaTransacoes={listaTransacoes}
        setListaTransacoes={setListaTransacoes}
      />
    </>
  );
};

export default App;
