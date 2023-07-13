import { useState } from 'react';
import logo from './assets/Logo_page-0001-removebg-preview1.png'
import configuration from './assets/settings.svg'

import './styles.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="container">
        <div className="container-login">
            <div className="wrapper">
            <img src={configuration} alt='Configurações' className='configuration'/>
            <form className="login-form">
                
                <span  className="form-title">
                <img src={logo} alt="Logo do sistema"/>
                </span>

                <span className="form-title">
                Bem vindo ao TecJus!
                </span>

                <div className='wrap-input'>
                <input 
                className={email !== '' ? 'hasValue input' : 'input'} 
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='wrap-input'>
                <input 
                className={password !== '' ? 'hasValue input' : 'input'} 
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <span className='focus-input' data-placeholder='Senha'></span>
                </div>

                <div className='container-login-form-btn'>
                <button className='login-form-btn' type='submit'>Entrar</button>
                </div>

            </form>
            </div>
        </div>
        </div>
    );
    }

export default Login