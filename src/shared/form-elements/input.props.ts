import { PropsWithoutChildren } from '../../types-and-models/props-and-state/props.types';
import * as React from 'react';

export type InputProps<T extends boolean | string | number> =
    {
        label: string,
        value: T,
        id: string,
        name: string,
        changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder?: string,
    } & PropsWithoutChildren;
