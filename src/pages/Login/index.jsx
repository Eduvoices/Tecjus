import { useState } from 'react';
import logo from '../../assets/Logo_page-0001-removebg-preview1.png'

import * as S from './styles.js'

function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    return (
        <S.Container className="container">
        <S.ContainerLogin className="container-login">
            <S.Wrapper className="wrapper">
            <S.LoginForm className="login-form">
                
                <div id='central-img'>
                    <img src={logo} alt="Logo do sistema"/>
                </div>

                <S.WrapInput className='wrap-input'>
                <S.Input  
                type='text'
                value={user}
                onChange={e => setUser(e.target.value)}
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