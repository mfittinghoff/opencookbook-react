import * as React from 'react';
import { InputText } from '../../shared/form-elements/input-text/InputText';

export const SignUp: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    return (
        <form>
            <InputText
                label={'Username'}
                value={username}
                changeHandler={setUsername}
            />
            <InputText
                label={'Password'}
                value={password}
                changeHandler={setPassword}
            />
            <InputText
                label={'Repeat password'}
                value={repeatPassword}
                changeHandler={setRepeatPassword}
            />
        </form>
    );
};
