import * as React from 'react';
import { InputText } from '../../shared/form-elements/InputText';
import { State } from '../../types-and-models/props-and-state/state.types';
import { SignUpDto } from '../../types-and-models/dtos/auth/sign-up.dto';
import { InputPassword } from '../../shared/form-elements/InputPassword';
import { Button } from '../../shared/controls/Button';

export const SignUp: React.FC = () => {
    const getDefaults = () => {
        return {
            username: '',
            password: '',
            repeatPassword: '',
        };
    };
    const [signUp, setSignUp]: State<SignUpDto> = React.useState(getDefaults());
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const updatedSignUp = {
            ...signUp,
            [target.name]: target.value,
        };
        setSignUp(updatedSignUp);
    };
    const handleReset = () => setSignUp(getDefaults);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <div className="v-container-40 front-page-container">
            <form className="medium-container" onReset={handleReset} onSubmit={handleSubmit}>
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
                <div className="flex-row justify-space-between default-margin">
                    <Button label={'Reset'} type={'reset'}/>
                    <Button label={'Submit'} type={'submit'}/>
                </div>
            </form>
        </div>
    );
};
