import * as React from 'react';
import { PropsWithoutChildren } from '../../types-and-models/props-and-state/props.types';

type ButtonProps = { action?: () => void, label: string , type?: 'reset' | 'submit' | 'button'} & PropsWithoutChildren;
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            onClick={props.action}
            type={props.type}>
            {props.label}
        </button>
    );
};

Button.defaultProps = { type: 'button', action: () => {} };
