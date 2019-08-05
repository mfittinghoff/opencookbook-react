import * as React from 'react';

export type State<T> = [T, React.Dispatch<React.SetStateAction<T>>];
