import React, { useState } from "react";
import Grid from "../Grid";
import "./styles.css";
import InputText from "./InputText";
import InputRadioGroup from "./InputRadioGroup";
import Button from "./Button";



interface FormProps {
    handleAdd: (transaction: Transaction) => void;
    transactionsList:  Array<Transaction>;
    setTransactionsList: (transactionsList: Array<Transaction>) => void;
}

const Form = ({ handleAdd, transactionsList, setTransactionsList }: FormProps) => {
    const [desc, setDesc] = useState<string>("");
    const [amount, setAmount] = useState<Number>(0);
    const [isExpense, setExpense] = useState<Boolean>(false);

    const generateID = () => Math.round(Math.random() * 1000);


    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (Number(amount) < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction :Transaction = {
            id: generateID(),
            desc: desc,
            amount: Number(amount),
            expense: Boolean(isExpense),
        };

        handleAdd(transaction);

        setDesc("");
        setAmount(0);
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
                    value={String(amount)}
                    onChange={value => setAmount(Number(value))}
                />
                <div className="divbutton">
                    <InputRadioGroup
                        checked={true}
                        onChange={value => setExpense(!isExpense)}
                    />
                    <Button onClick={handleSave}>Adicionar</Button>
                </div>
            </div>
            <div className="table-form">
                <Grid itens={transactionsList} setItens={setTransactionsList} />
            </div>
        </>
    );
};

export default Form;
