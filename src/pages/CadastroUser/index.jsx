import exit from '../../assets/log-out.svg'


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
                            <input className="input" type="email"/>
                            <S.FocusInput className='focus-input' data-placeholder='E-mail'></S.FocusInput>
                        </S.WrapInput>

                        <S.WrapInput className="wrap-input">
                            <input className="input" type="password"/>
                            <S.FocusInput className='focus-input' data-placeholder='Senha'></S.FocusInput>
                        </S.WrapInput>
                        <S.WrapInput className="wrap-input">
                            <input className="input" type="password"/>
                            <S.FocusInput className='focus-input' data-placeholder='Confirmar senha'></S.FocusInput>
                        </S.WrapInput>
                        
                        <S.WrapInput className="wrap-input">
                            <S.WrapSelect id='uf'>
                                <S.Option value='ativo'>Ativo</S.Option>
                                <S.Option value='cancelado'>Cancelado</S.Option>
                            </S.WrapSelect>
                            <S.FocusInput className='focus-input' data-placeholder='Status'></S.FocusInput>
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
                            <S.FocusInput className='focus-input' data-placeholder='Status'></S.FocusInput>
                        </S.WrapInput>
                    </S.CadastroForm>
                </S.Wrapper>
            </S.ContainerCadastro>
        </S.Container>
    )
}

export default CadastroUser