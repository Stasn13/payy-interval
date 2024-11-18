import * as React from 'react';

interface InputProps {
    afterText?: string
    onChange: (value: string) => void
    value: string
}
const Input = ({ afterText="increment by", onChange, value }: InputProps) => {

    const onInputChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className="input-elem">
            <input type='number' value={value} onChange={onInputChange}/>
            <label>
                {afterText}
            </label>
        </div>
    )
}

export default Input;