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
        const [street, setStreet] = useState('')
        const [uf, setUf] = useState('')
        const [block, setBlock] = useState('')
        const [city, setCity] = useState('')
        const [teste, setTeste] = useState('')

        let cep = ''

        function onClick() {
        setEdit(!edit)
        }

        const checkCEP = (e) => {
            if (!e.target.value) return;
            cep = e.target.value.replace(/\D/g, '');
            setTeste(cep)
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                console.log(data);
                setStreet(data.logradouro)
                setBlock(data.bairro)
                setCity(data.localidade)
                setUf(data.uf)
            });
            }

        return (
            <S.Container className="container">
                <S.ContainerCadastro className="container-cadastro">
                    <S.Wrapper className="wrapper">
                        <Link to='/'>
                            <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                        </Link>
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
                                
                                <S.FormBtn type="button" className='form-btn'>
                                <img src={search} alt='' />
                                Consulta
                                </S.FormBtn>
                                
                            </S.ButtonRow>
                        
                            <S.FormTitle className="form-title">
                            Pessoa Física
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
                                <InputMask 
                                mask="99.999-999" 
                                className='input'  
                                id='cep'
                                onBlur={checkCEP}
                                />
                                <S.FocusInput className='focus-input' data-placeholder='CEP'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='endereco' defaultValue={street}/>
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
                                <input className="input" type="text" id='bairro' defaultValue={block}/>
                                <S.FocusInput className='focus-input' data-placeholder='Bairro *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <S.WrapSelect id='uf'>
                                    {teste.length === 8 ? (
                                        <S.Option value='UF'>{uf}</S.Option>
                                    ): (
                                        <S.Option value='UF'>UF</S.Option>
                                    )}
                                    
                                    <S.Option value='AC'>AC</S.Option>
                                    <S.Option value='AL'>AL</S.Option>
                                    <S.Option value='AM'>AM</S.Option>
                                    <S.Option value='AP'>AP</S.Option>
                                    <S.Option value='BA'>BA</S.Option>
                                    <S.Option value='CE'>CE</S.Option>
                                    <S.Option value='DF'>DF</S.Option>
                                    <S.Option value='ES'>ES</S.Option>
                                    <S.Option value='GO'>GO</S.Option>
                                    <S.Option value='MA'>MA</S.Option>
                                    <S.Option value='MG'>MG</S.Option>
                                    <S.Option value='MS'>MS</S.Option>
                                    <S.Option value='MT'>MT</S.Option>
                                    <S.Option value='PA'>PA</S.Option>
                                    <S.Option value='PB'>PB</S.Option>
                                    <S.Option value='PE'>PE</S.Option>
                                    <S.Option value='PI'>PI</S.Option>
                                    <S.Option value='PR'>PR</S.Option>
                                    <S.Option value='RJ'>RJ</S.Option>
                                    <S.Option value='RN'>RN</S.Option>
                                    <S.Option value='RO'>RO</S.Option>
                                    <S.Option value='RR'>RR</S.Option>
                                    <S.Option value='RS'>RS</S.Option>
                                    <S.Option value='SC'>SC</S.Option>
                                    <S.Option value='SE'>SE</S.Option>
                                    <S.Option value='SP'>SP</S.Option>
                                    <S.Option value='TO'>TO</S.Option>
                                </S.WrapSelect>
                                <S.FocusInput className='focus-input' data-placeholder='UF *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input className="input" type="text" id='cidade' defaultValue={city}/>
                                <S.FocusInput className='focus-input' data-placeholder='Cidade *'></S.FocusInput>
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