import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";

interface ResumeProps  {
  income: string
  expense: string
  total: string
}

interface ITransaction {
  amount:number
}

interface IItem {
  expense:number
}

const App = (resume:ResumeProps) => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState<string>();
  const [expense, setExpense] = useState<string>();
  const [total, setTotal] = useState<string>();

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item:IItem) => item.expense)
      .map((transaction:ITransaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item:IItem) => !item.expense)
      .map((transaction:ITransaction) => Number(transaction.amount));

     resume.expense = amountExpense.reduce((acc:number, cur:number) => acc + cur, 0).toFixed(2);
     resume.income = amountIncome.reduce((acc:number, cur:number) => acc + cur, 0).toFixed(2);

    const total = Math.abs(Number(resume.income) - Number(resume.expense)).toFixed(2);

    setIncome(`R$ ${resume.income}`);
    setExpense(`R$ ${resume.expense}`);
    setTotal(`${Number(resume.income) < Number(resume.expense) ? "-" : ""}R$ ${resume.total}`);
  }, [transactionsList]);

  const handleAdd = (transaction:ITransaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={resume.income} expense={resume.expense} total={resume.total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
};

export default App;
