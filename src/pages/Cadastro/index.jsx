    import exit from '../../assets/log-out.svg'
    import logo from '../../assets/Logo_page-0001-removebg-preview1.png'
    import add from '../../assets/plus-circle.svg'
    import editIcon from '../../assets/edit.svg'
    import del from '../../assets/trash-2.svg'
    import check from '../../assets/check.svg'
    import cancel from '../../assets/x.svg'
    import search from '../../assets/search.svg'
    import InputMask from 'react-input-mask'

    import * as S from './styles'
    
    import { useState } from 'react'

    function Cadastro() {
        const [edit, setEdit] = useState(false)

        function onClick() {
        setEdit(!edit)
        }

        return (
            <S.Container className="container">
                <S.ContainerCadastro className="container-cadastro">
                    <S.Wrapper className="wrapper">
                    <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                    <S.FormTitle  className="form-title">
                                <img src={logo} alt="Logo do sistema"/>
                            </S.FormTitle>

                            <S.FormTitle className="form-title">
                            Cadastro
                            </S.FormTitle>

                            <S.Required id='required'>*Campo obrigatório</S.Required>

                        <S.CadastroForm className="cadastro-form">
                        <S.WrapInput className="wrap-input">
                                <input className="input" type="number" id='code'/>
                                <S.FocusInput className='focus-input' data-placeholder='Código'></S.FocusInput>
                            </S.WrapInput>

                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='nome'/>
                                <S.FocusInput className='focus-input' data-placeholder='Nome completo *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask mask="99.999.999-9" className='input'  id='rg'/>
                                <S.FocusInput className='focus-input' data-placeholder='RG'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask mask="999.999.999-99" className='input'  id='cpf'/>
                                <S.FocusInput className='focus-input' data-placeholder='CPF *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask mask="99/99/9999" className='input'  id='nascimento'/>
                                <S.FocusInput className='focus-input' data-placeholder='Data de nascimento'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask mask="99.999-999" className='input'  id='cep'/>
                                <S.FocusInput className='focus-input' data-placeholder='CEP'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='endereco'/>
                                <S.FocusInput className='focus-input' data-placeholder='Endereço *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="number" id='numero'/>
                                <S.FocusInput className='focus-input' data-placeholder='Nº *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='complemento'/>
                                <S.FocusInput className='focus-input' data-placeholder='Complemento'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='bairro'/>
                                <S.FocusInput className='focus-input' data-placeholder='Bairro *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='cidade'/>
                                <S.FocusInput className='focus-input' data-placeholder='Cidade *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="number" id='uf'/>
                                <S.FocusInput className='focus-input' data-placeholder='UF *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask mask="(99) 99999-9999" className='input'  id='telefone1'/>
                                <S.FocusInput className='focus-input' data-placeholder='Telefone 1 *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask mask="(99) 99999-9999" className='input'  id='telefone2'/>
                                <S.FocusInput className='focus-input' data-placeholder='Telefone 2'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask mask="(99) 99999-9999" className='input'  id='telefone3'/>
                                <S.FocusInput className='focus-input' data-placeholder='Telefone 3'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="email" id='email'/>
                                <S.FocusInput className='focus-input' data-placeholder='Email'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='social'/>
                                <S.FocusInput className='focus-input' data-placeholder='Rede Social'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='responsavel'/>
                                <S.FocusInput className='focus-input' data-placeholder='Responsável'></S.FocusInput>
                            </S.WrapInput>
                            
                            
                        </S.CadastroForm>

                        <S.Obs className='obs'>
                        <h4>Observações</h4>
                        <textarea id='textarea'/>
                        </S.Obs>
                            
                            <S.ButtonRow className="button-row">
                                
                                {edit === true ? (
                                    <>
                                    <S.FormBtn type="button" className='form-btn'>
                                <img src={check} alt='' />
                                Ok
                                </S.FormBtn>
                                <S.FormBtn type="button" className='form-btn' onClick={onClick}>
                                <img src={cancel} alt='' />
                                Cancelar
                                </S.FormBtn>
                                    </>
                                ) : (
                                    <>
                                    <S.FormBtn type="submit" className='form-btn'>
                                <img src={add} alt='Inserir'/>
                                Inserir
                                </S.FormBtn>
                                <S.FormBtn type="button" className='form-btn' onClick={onClick}>
                                <img src={editIcon} alt='' />
                                Alterar
                                </S.FormBtn>
                                <S.FormBtn type="button" className='form-btn'>
                                <img src={del} alt='' />
                                Excluir
                                </S.FormBtn>
                                    </>
                                )}
                                
                                <S.FormBtn type="submit" className='form-btn'>
                                <img src={search} alt='' />
                                Consulta
                                </S.FormBtn>
                                
                            </S.ButtonRow>
                            
                    </S.Wrapper>
                </S.ContainerCadastro>
            </S.Container>
        )
    }

    export default Cadastro