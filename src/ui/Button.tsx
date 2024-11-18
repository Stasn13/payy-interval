import * as React from 'react';

interface ButtonProps {
    text: string
    onClick: () => void
    iconBefore?: React.ReactNode
}
const Button = ({ text, onClick, iconBefore }: ButtonProps) => {

    return (
        <button onClick={onClick}>
            <span>
                {iconBefore}
            </span>
            {text}
        </button>
    )
}

export default Button;