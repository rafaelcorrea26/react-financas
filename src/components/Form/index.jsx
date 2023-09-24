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
                    required={true}
                    label="Descrição"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)} 
                    />
                <InputText
                    required={true}
                    label="Valor"
                    value={amount}
                    onChange={(e) => setDesc(e.target.value)} 
                    />
                <InputRadioGroup 
                    required={true} 
                    onChange={() => setExpense(!isExpense)} 
                    />
                <Button onClick={handleSave}>Adicionar</Button>
            </div>
            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    );
};

export default Form;
