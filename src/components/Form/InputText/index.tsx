import React from 'react';
import './styles.css';

interface InputTextProps {
    type:string;
    required: boolean;
    label:string;
    value:string;
    onChange: (valor: string) => void; 
}

const InputText = (props:InputTextProps) => {    
            const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                props.onChange( e.target.value);
              }
    
    return (
        <div className="inputText">
            <label>{props.label}</label>
            <input value={props.value} 
                   type={props.type ? 'number' : ''}
                   onChange={onChange} 
                   required={props.required}  
            />
        </div>
    )
}

export default InputText;