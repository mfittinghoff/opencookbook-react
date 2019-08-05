import { PropsWithoutChildren } from '../../../types/props.types';

export type InputProps<T extends boolean | string | number> =
    {
        label: string,
        value: T,
        changeHandler: (newVal: T) => void,
    } & PropsWithoutChildren;
