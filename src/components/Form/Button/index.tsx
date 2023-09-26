import React, { ReactNode, MouseEvent } from 'react';
import './styles.css';

interface ButtonProps  {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
}

export default Button;