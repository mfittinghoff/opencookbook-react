import * as React from 'react';
import { InputText } from '../../shared/form-elements/inputs/InputText';
import { State } from '../../types-and-models/props-and-state/state.types';
import { SignUpDto } from '../../types-and-models/dtos/auth/sign-up.dto';
import { InputPassword } from '../../shared/form-elements/inputs/InputPassword';

export const SignUp: React.FC = () => {
    const [signUp, setSignUp]: State<SignUpDto> = React.useState(
        {
            username: '',
            password: '',
            repeatPassword: '',
        });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const updatedSignUp = {
            ...signUp,
            [target.name]: target.value,
        };
        setSignUp(updatedSignUp);
    };
    return (
        <div className="large-container">
            <form>
                <InputText
                    id={'sign-up-username'}
                    name={'username'}
                    label={'Username'}
                    value={signUp.username}
                    placeholder={'Your name here'}
                    changeHandler={handleChange}
                />
                <InputPassword
                    id={'sign-up-password'}
                    name={'password'}
                    label={'Password'}
                    value={signUp.password}
                    changeHandler={handleChange}
                />
                <InputPassword
                    id={'sign-up-repeatPassword'}
                    name={'repeatPassword'}
                    label={'Repeat password'}
                    value={signUp.repeatPassword}
                    changeHandler={handleChange}
                />
            </form>
        </div>
    );
};
