import * as React from 'react';
import { InputProps } from './input.props';

export const InputPassword: React.FC<InputProps<string>> = (props: InputProps<string>) => {
    return (
        <label className="input-row flex-row flex-wrap">
            <span>{props.label}</span>
            <input
                id={props.id}
                name={props.name}
                type="password"
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changeHandler}
            />
        </label>
    );
};
