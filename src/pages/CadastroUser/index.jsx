import exit from '../../assets/log-out.svg'
import check from '../../assets/check.svg'
import cancel from '../../assets/x.svg'


import * as S from './styles'

import { Link } from 'react-router-dom'
import { useState } from 'react'

function CadastroUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("")

    const [inputEmailErr, setInputEmailErr] = useState(false);
    const [inputPasswordErr, setInputPasswordErr] = useState(false);

    const validate = () => {
        if (!validEmail.test(email)) {
        setInputEmailErr(true);
        } else {
        setInputEmailErr(false);
        }
        if (!validPassword.test(password)) {
        setInputPasswordErr(true);
        } else {
        setInputPasswordErr(false);
        }
    };

    function handleEnter(event) {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
        }
    
    function clear() {
        setConfirm('')
        setEmail('')
        setPassword('')
    }

    const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

    const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");


    return (
        <S.Container className="container">
            <S.ContainerCadastro className="container-cadastro">
                <S.Wrapper className="wrapper">
                    <Link to='/menu'>
                        <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                    </Link>
                        <S.FormTitle className="form-title">
                        Cadastro de Usuário
                        </S.FormTitle>

                    <S.CadastroForm className="cadastro-form">
                    <S.WrapInput className="wrap-input">
                            <input 
                            id='input1' 
                            className="input" 
                            type="email" 
                            title='email' 
                            placeholder='' 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            onKeyDown={handleEnter}/>
                            {inputEmailErr && <p>Por favor, digite um email válido</p>}
                            <S.FocusInput htmlFor='input1' className='focus-input' data-placeholder='E-mail'></S.FocusInput>
                        </S.WrapInput>

                        <S.WrapInput className="wrap-input">
                            <input 
                            id='input2' 
                            className="input" 
                            type="password" 
                            title='password' 
                            placeholder='' 
                            onKeyDown={handleEnter}
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                            {inputPasswordErr && <p>Por favor, digite uma senha mais forte</p>}
                            <S.FocusInput htmlFor='input2' className='focus-input' data-placeholder='Senha'></S.FocusInput>
                        </S.WrapInput>
                        <S.WrapInput className="wrap-input">
                            <input 
                            id='input3' 
                            className="input" 
                            type="password" 
                            title='confirmPassword' 
                            placeholder='' 
                            onKeyDown={handleEnter}
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            />
                            {confirm === password ? (<span />) : (<p>Digite uma senha igual</p>)}
                            <S.FocusInput htmlFor='input3' className='focus-input' data-placeholder='Confirmar senha'></S.FocusInput>
                        </S.WrapInput>
                        

                        <S.WrapInput>
                            <div className="radio">
                                <div>
                            <input type='radio' name='radio' id='ativo' onKeyDown={handleEnter}></input>
                            <label htmlFor='ativo'>Ativo</label>
                                </div>
                                <div>
                            <input type='radio' name='radio' id='cancelado' onKeyDown={handleEnter}></input>
                            <label htmlFor='cancelado'>Cancelado</label>
                                </div>
                            </div>
                            <S.FocuSpan className='focus-input' data-placeholder='Status'></S.FocuSpan>
                        </S.WrapInput>

                        <S.ButtonRow className="button-row">
                                <S.FormBtn type="button" className='form-btn'>
                                <img src={check} alt='botão de confirmação' onClick={validate}/>
                                Confirmar
                                </S.FormBtn>
                                <S.FormBtn onClick={clear} className='form-btn'>
                                <img src={cancel} alt='botão de cancelamento' />
                                Cancelar
                                </S.FormBtn>
                            </S.ButtonRow>
        
                    </S.CadastroForm>
                </S.Wrapper>
            </S.ContainerCadastro>
        </S.Container>
    )
}

export default CadastroUser