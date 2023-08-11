    import exit from '../../assets/log-out.svg'
    import add from '../../assets/plus-circle.svg'
    import editIcon from '../../assets/edit.svg'
    import del from '../../assets/trash-2.svg'
    import check from '../../assets/check.svg'
    import cancel from '../../assets/x.svg'
    import search from '../../assets/search.svg'
    import InputMask from 'react-input-mask'

    import * as S from './styles'
    
    import { useState } from 'react'
import { Link } from 'react-router-dom'

    function Cadastro() {
        const [edit, setEdit] = useState(false)

        function onClick() {
        setEdit(!edit)
        }

        return (
            <S.Container className="container">
                <S.ContainerCadastro className="container-cadastro">
                    <S.Wrapper className="wrapper">
                        <Link to='/'>
                            <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                        </Link>
                            <S.FormTitle className="form-title">
                            Pessoa Física
                            </S.FormTitle>

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
                            <S.WrapInput className="wrap-select">
                                <S.WrapSelect className="select" id='uf'>
                                    <S.Option>AC</S.Option>
                                    <S.Option>AL</S.Option>
                                    <S.Option>AM</S.Option>
                                    <S.Option>AP</S.Option>
                                    <S.Option>BA</S.Option>
                                    <S.Option>CE</S.Option>
                                    <S.Option>DF</S.Option>
                                    <S.Option>ES</S.Option>
                                    <S.Option>GO</S.Option>
                                    <S.Option>MA</S.Option>
                                    <S.Option>MG</S.Option>
                                    <S.Option>MS</S.Option>
                                    <S.Option>MT</S.Option>
                                    <S.Option>PA</S.Option>
                                    <S.Option>PB</S.Option>
                                    <S.Option>PE</S.Option>
                                    <S.Option>PI</S.Option>
                                    <S.Option>PR</S.Option>
                                    <S.Option>RJ</S.Option>
                                    <S.Option>RN</S.Option>
                                    <S.Option>RO</S.Option>
                                    <S.Option>RR</S.Option>
                                    <S.Option>RS</S.Option>
                                    <S.Option>SC</S.Option>
                                    <S.Option>SE</S.Option>
                                    <S.Option>SP</S.Option>
                                    <S.Option>TO</S.Option>
                                </S.WrapSelect>
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
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='observation'/>
                                <S.FocusInput className='focus-input' data-placeholder='Observações'></S.FocusInput>
                            </S.WrapInput>

                        </S.CadastroForm>
                    </S.Wrapper>
                </S.ContainerCadastro>
            </S.Container>
        )
    }

    export default Cadastro