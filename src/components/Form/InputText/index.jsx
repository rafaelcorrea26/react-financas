import './styles.css';

 /*required={props.obrigatorio} obriga a ser obrigatorio o campo que e passado no parametro*/
const InputText = (props) => {
    const onChange = (evento) => {
        props.onChange(evento.target.value)
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