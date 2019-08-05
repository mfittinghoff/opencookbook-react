import * as React from 'react';
import { InputProps } from '../types/input.types';

export const InputText: React.FC<InputProps<string>> = (props: InputProps<string>) => {
    const [formValue, setFormValue] = React.useState('');
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFormValue(value);
        props.changeHandler(value);
    };
    return (
        <label className="input-text-wrapper">
            {props.label}
            <input type="text" value={formValue} onChange={changeHandler}/>
        </label>
    );
};
