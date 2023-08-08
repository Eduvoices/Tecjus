import { useState } from 'react';
import logo from '../../assets/Logo_page-0001-removebg-preview1.png'
import configuration from '../../assets/settings.svg'

import * as S from './styles.js'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firm, setFirm] = useState("")

    console.log(email)

    return (
        <S.Container className="container">
        <S.ContainerLogin className="container-login">
            <S.Wrapper className="wrapper">
            <S.configuration src={configuration} alt='Configurações' className='configuration'/>
            <S.LoginForm className="login-form">
                
                <div id='central-img'>
                    <img src={logo} alt="Logo do sistema"/>
                </div>

                <S.WrapInput className='wrap-input'>
                <S.Input  
                type='text'
                value={firm}
                onChange={e => setFirm(e.target.value)}
                />
                <S.FocusInput className='focus-input' data-placeholder='Escritório'></S.FocusInput>
                </S.WrapInput>

                <S.WrapInput className='wrap-input'>
                <S.Input  
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <S.FocusInput className='focus-input' data-placeholder='Login'></S.FocusInput>
                </S.WrapInput>

                <S.WrapInput className='wrap-input'>
                <S.Input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <S.FocusInput className='focus-input' data-placeholder='Senha'></S.FocusInput>
                </S.WrapInput>

                <S.Remember>
                    <input type='checkbox' id='remember'/>
                    <label htmlFor='remember'>Lembrar escritório e login</label>
                </S.Remember>
                
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