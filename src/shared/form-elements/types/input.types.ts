import { PropsWithoutChildren } from '../../../types/props.types';
import * as React from 'react';

export type InputProps<T extends boolean | string | number> =
    {
        label: string,
        initialValue: T,
        changeHandler: React.Dispatch<React.SetStateAction<T>>,
    } & PropsWithoutChildren;
