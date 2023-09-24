import './styles.css';

 /*required={props.obrigatorio} obriga a ser obrigatorio o campo que e passado no parametro*/
const InputText = (props) => {
    const placeholderModificada = `Digite seu ${props.label}`;
    const onChange = (evento) => {
        props.onChange(evento.target.value)
    }  
    
    return (
        <div className="inputText">
            <label>{props.label}</label>
            <input value={props.value} 
                   onChange={onChange} 
                   required={props.required}  
                   placeholder= {placeholderModificada}/>
        </div>
    )
}

export default InputText;