import React, { useState } from "react";
import Grid from "../Grid";
import "./styles.css";
import InputText from "./InputText";
import InputRadioGroup from "./InputRadioGroup";
import Button from "./Button";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <div className="formulario">
                <InputText
                    type=''
                    required={true}
                    label="Descrição"
                    value={desc}
                    onChange={value => setDesc(value)}
                    />
                <InputText
                    type='number'
                    required={true}
                    label="Valor"
                    value={amount}
                    onChange={value => setAmount(value)}
                    />
                <InputRadioGroup 
                    required={true} 
                    onChange={() => setExpense(!isExpense)} 
                    />
                <Button onClick={handleSave}>Adicionar</Button>
            </div>
            <div className="table-form">
            <Grid itens={transactionsList} setItens={setTransactionsList} />
            </div>
        </>
    );
};

export default Form;
