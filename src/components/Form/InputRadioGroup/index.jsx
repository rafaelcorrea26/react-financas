import './styles.css';

/*required={props.obrigatorio} obriga a ser obrigatorio o campo que e passado no parametro*/
const InputRadioGroup = (props) => {
    const onChange = (evento) => {
        props.onChange(evento.target.value)
    }

    return (
        <div onChange={onChange} className='radiog' required={props.required}>
            <input type="radio" value="Entrada" name="tipo" /> Entrada
            <input type="radio" value="Saida" name="tipo" /> Saida
        </div>
    )
}

export default InputRadioGroup;