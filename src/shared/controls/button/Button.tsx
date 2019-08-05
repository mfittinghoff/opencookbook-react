import * as React from 'react';
import './Button.scss';
import { PropsWithoutChildren } from '../../../types-and-models/props-and-state/props.types';

type ButtonProps = { action: () => void, label: string } & PropsWithoutChildren;
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            onClick={props.action}
            type="button">
            {props.label}
        </button>
    );
};
