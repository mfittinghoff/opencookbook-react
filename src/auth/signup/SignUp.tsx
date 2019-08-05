import * as React from 'react';
import { InputText } from '../../shared/form-elements/input-text/InputText';

export const SignUp: React.FC = () => {
    const [username, setUsername] = React.useState('Test');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    return (
        <form>
            <InputText
                label={'Username'}
                initialValue={username}
                changeHandler={setUsername}
            />
            <InputText
                label={'Password'}
                initialValue={password}
                changeHandler={setPassword}
            />
            <InputText
                label={'Repeat password'}
                initialValue={repeatPassword}
                changeHandler={setRepeatPassword}
            />
        </form>
    );
};
