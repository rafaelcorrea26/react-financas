import './styles.css';
/* Para passar icone ou qualquer outra coisa usamos pops.children*/
const Button = (props) => {
    return (<button onClick={props.onClick} className='button' >
        {props.children} 
    </button>)
}

export default Button;