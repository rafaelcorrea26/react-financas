import React, { useState } from "react";
import Grid from "../Grid";
import "./styles.css";
import InputText from "./InputText";
import InputRadioGroup from "./InputRadioGroup";
import Button from "./Button";

interface ITransaction {
    id: BigInteger,
    desc: string,
    amount: number,
    expense: boolean,
}

interface FormProps {
    handleAdd: (transaction: ITransaction) => void;
    transactionsList: (transactionsList: Array<ITransaction>) => void;
    setTransactionsList: (transactionsList: Array<ITransaction>) => void;
}

const Form = ({ handleAdd, transactionsList, setTransactionsList }: FormProps) => {
    const [desc, setDesc] = useState<string>("");
    const [amount, setAmount] = useState<string>("0");
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

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd;

        setDesc("");
        setAmount("0");
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
                <div className="divbutton">
                    <InputRadioGroup
                        checked={true}
                        onChange={() => setExpense(!isExpense)}
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
