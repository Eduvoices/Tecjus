import exit from '../../assets/log-out.svg'
import check from '../../assets/check.svg'
import cancel from '../../assets/x.svg'


import * as S from './styles'

import { Link } from 'react-router-dom'

function CadastroUser() {


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
                            <input id='input1' className="input" type="email" title='email' placeholder=''/>
                            <S.FocusInput htmlFor='input1' className='focus-input' data-placeholder='E-mail'></S.FocusInput>
                        </S.WrapInput>

                        <S.WrapInput className="wrap-input">
                            <input id='input2' className="input" type="password" title='password' placeholder=''/>
                            <S.FocusInput htmlFor='input2' className='focus-input' data-placeholder='Senha'></S.FocusInput>
                        </S.WrapInput>
                        <S.WrapInput className="wrap-input">
                            <input id='input3' className="input" type="password" title='confirmPassword' placeholder=''/>
                            <S.FocusInput htmlFor='input3' className='focus-input' data-placeholder='Confirmar senha'></S.FocusInput>
                        </S.WrapInput>
                        

                        <S.WrapInput>
                            <div className="radio">
                                <div>
                            <input type='radio' name='radio' id='ativo'></input>
                            <label htmlFor='ativo'>Ativo</label>
                                </div>
                                <div>
                            <input type='radio' name='radio' id='cancelado'></input>
                            <label htmlFor='cancelado'>Cancelado</label>
                                </div>
                            </div>
                            <S.FocuSpan className='focus-input' data-placeholder='Status'></S.FocuSpan>
                        </S.WrapInput>

        
                    </S.CadastroForm>
                    <S.ButtonRow className="button-row">
                                <S.FormBtn type="button" className='form-btn'>
                                <img src={check} alt='' />
                                Confirmar
                                </S.FormBtn>
                                <S.FormBtn type="button" className='form-btn'>
                                <img src={cancel} alt='' />
                                Cancelar
                                </S.FormBtn>
                            </S.ButtonRow>
                </S.Wrapper>
            </S.ContainerCadastro>
        </S.Container>
    )
}

export default CadastroUser