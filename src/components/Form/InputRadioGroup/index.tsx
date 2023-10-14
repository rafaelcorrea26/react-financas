import React from 'react';
import './styles.css';

interface InputRadioGroupProps {
    checked: boolean;
    onChange: (valor: string) => void;    
}

const InputRadioGroup = (props: InputRadioGroupProps) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    }

    return (
        <div onChange={onChange} className='radiog'>
            <input type="radio" value="Entrada" name="tipo" checked={props.checked}/> Entrada
            <input type="radio" value="Saida" name="tipo" /> Saida
        </div>
    )
}

export default InputRadioGroup;