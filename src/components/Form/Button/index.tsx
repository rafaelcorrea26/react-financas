import { ReactElement , MouseEvent} from 'react'
import './styles.css'

import React from 'react';


interface BotaoProps {
    onClick: MouseEvent<HTMLButtonElement>
    children: ReactElement
}

const Button = (props: BotaoProps) => {
    return (
    <button     
    onClick={props.onClick} className='button'> {props.children}</button>)
}

export default Button;