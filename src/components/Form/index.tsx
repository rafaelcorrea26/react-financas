import React, { useState } from "react";
import Grid from "../Grid";
import "./styles.css";
import InputText from "./InputText";
import InputRadioGroup from "./InputRadioGroup";
import Button from "./Button";



interface FormProps {
    handleAdd: (transaction: Transacao) => void;
    listaTransacoes:  Array<Transacao>;
    setListaTransacoes: (listaTransacoes: Array<Transacao>) => void;
}

const Form = ({ handleAdd, listaTransacoes, setListaTransacoes }: FormProps) => {
    const [desc, setDesc] = useState<string>("");
    const [quantidade, setQuantidade] = useState<Number>(0);
    const [ehDespesa, setEhDespesa] = useState<Boolean>(false);

    const generateID = () => Math.round(Math.random() * 1000);


    const handleSave = () => {
        if (!desc || !quantidade) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (Number(quantidade) < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction :Transacao = {
            id: generateID(),
            desc: desc,
            quantidade: Number(quantidade),
            ehDespesa: Boolean(ehDespesa),
        };
        console.log(transaction);
        handleAdd(transaction);

        setDesc("");
        setQuantidade(0);
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
                    value={String(quantidade)}
                    onChange={value => setQuantidade(Number(value))}
                />
                <div className="divbutton">
                    <InputRadioGroup
                        checked={true}
                        onChange={value => setEhDespesa(!ehDespesa)}
                    />
                    <Button onClick={handleSave}>Adicionar</Button>
                </div>
            </div>
            <div className="table-form">
                <Grid itens={listaTransacoes} setItens={setListaTransacoes} />
            </div>
        </>
    );
};

export default Form;
