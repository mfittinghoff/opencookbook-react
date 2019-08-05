import * as React from 'react';
import { InputProps } from '../types/input.types';
import './Input.scss';

export const InputText: React.FC<InputProps<string>> = (props: InputProps<string>) => {
    return (
        <label className="input-row flex-row flex-wrap">
            <span>{props.label}</span>
            <input
                id={props.id}
                name={props.name}
                type="text"
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changeHandler}
            />
        </label>
    );
};
