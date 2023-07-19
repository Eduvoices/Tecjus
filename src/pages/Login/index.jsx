import { useState } from 'react';
import logo from '../../assets/Logo_page-0001-removebg-preview1.png'
import configuration from '../../assets/settings.svg'

import * as S from './styles.js'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <S.Container className="container">
        <S.ContainerLogin className="container-login">
            <S.Wrapper className="wrapper">
            <S.configuration src={configuration} alt='Configurações' className='configuration'/>
            <S.LoginForm className="login-form">
                
                <S.FormTitle  className="form-title">
                <img src={logo} alt="Logo do sistema"/>
                </S.FormTitle>

                <S.FormTitle className="form-title">
                Bem vindo ao TecJus!
                </S.FormTitle>

                <S.WrapInput className='wrap-input'>
                <S.Input 
                className={email !== '' ? 'hasValue input' : 'input'} 
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <S.FocusInput className='focus-input' data-placeholder='Email'></S.FocusInput>
                </S.WrapInput>

                <S.WrapInput className='wrap-input'>
                <S.Input
                className={password !== '' ? 'hasValue input' : 'input'} 
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <S.FocusInput className='focus-input' data-placeholder='Senha'></S.FocusInput>
                </S.WrapInput>

                <S.ContainerFormBtn className='container-login-form-btn'>
                <S.FormBtn className='login-form-btn' type='submit'>Entrar</S.FormBtn>
                </S.ContainerFormBtn>

            </S.LoginForm>
            </S.Wrapper>
        </S.ContainerLogin>
        </S.Container>
    );
    }

export default Login