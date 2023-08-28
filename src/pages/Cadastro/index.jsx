    import exit from '../../assets/log-out.svg'
    import check from '../../assets/check.svg'
    import cancel from '../../assets/x.svg'
    import InputMask from 'react-input-mask'

    import * as S from './styles'

    
    import { useState } from 'react'
    import { Link } from 'react-router-dom'
    import SelectUf from '../../components/SelectUF'
    import SelectCity from '../../components/SelectCity'
import { useRef } from 'react'


    function Cadastro() {
        const [street, setStreet] = useState('')
        const [block, setBlock] = useState('')
        const [cpf, setCPF] = useState('')
        const [formValue, setFormValue] = useState({})
        const [cepState, setCepState] = useState('')
        const [rg, setRg] = useState('')
        const [tel1, setTel1] = useState('')
        const [tel2, setTel2] = useState('')
        const [tel3, setTel3] = useState('')
        const [birth, setBirth] = useState('')

        const [email, setEmail] = useState('')
        const [emailErr, setEmailErr] = useState('')

        const ref = useRef(null)

        const handleRef = () => {
            ref.current.value = ''
        }

        let cep = ''

        const checkCEP = (e) => {
            if (!e.target.value) return;
            cep = e.target.value.replace(/\D/g, '');
            setCepState(e.target.value)
                fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                    setStreet(data.logradouro)
                    setBlock(data.bairro)
                }).catch((err) => console.log(''));
            }
            
        function limpaCampo(e) {
                setStreet('')
                setBlock('')
                setCepState('')
                setRg('')
                setTel1('')
                setTel2('')
                setTel3('')
                setCPF('')
                setBirth('')
            }

        function isCPF(cpf = 0){
                cpf  = cpf.replace(/\.|-/g,"");
            
                let soma = 0;
                soma += cpf[0] * 10;
                soma += cpf[1] * 9;
                soma += cpf[2] * 8;
                soma += cpf[3] * 7;
                soma += cpf[4] * 6;
                soma += cpf[5] * 5;
                soma += cpf[6] * 4;
                soma += cpf[7] * 3;
                soma += cpf[8] * 2;
                soma = (soma * 10) % 11;
            
                // eslint-disable-next-line eqeqeq
                if(soma == 10 || soma == 11)
                    soma = 0;
            
            
                // eslint-disable-next-line eqeqeq
                if(soma != cpf[9])
                    return false;
            
                soma = 0;
                soma += cpf[0] * 11;
                soma += cpf[1] * 10;
                soma += cpf[2] * 9;
                soma += cpf[3] * 8;
                soma += cpf[4] * 7;
                soma += cpf[5] * 6;
                soma += cpf[6] * 5;
                soma += cpf[7] * 4;
                soma += cpf[8] * 3;
                soma += cpf[9] * 2;
                soma = (soma * 10) % 11;
                
                // eslint-disable-next-line eqeqeq
                if(soma == 10 || soma == 11)
                    soma = 0;
            
                // eslint-disable-next-line eqeqeq
                if(soma != cpf[10])
                    return false;
                
                return true;
            }

        const handleChange = (event) => {
            setCPF(event.target.value)
        }

        const handleInputChange = (e) => {
            e.preventDefault()
            const {value, name} = e.target
            setFormValue({...formValue, [name]: value})
        }

        function handleEnter(event) {
            if (event.keyCode === 13) {
                const form = event.target.form;
                const index = Array.prototype.indexOf.call(form, event.target);
                form.elements[index + 1].focus();
                event.preventDefault();
            }
            }
        
        const validate = () => {
            if (!validEmail.test(email)) {
                setEmailErr(true)
            } else {
                setEmailErr(false)
            }
        }



        const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")

        return (
            <S.Container className="container">
                <S.ContainerCadastro className="container-cadastro">
                    <S.Wrapper className="wrapper">
                        <Link to='/menu'>
                            <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                        </Link>
                            <S.FormTitle className="form-title">
                            Pessoa Física
                            </S.FormTitle>

                        <S.Required id='required'>*Campo obrigatório</S.Required>
                        <S.CadastroForm className="cadastro-form">
                        <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="number" 
                                id='code' 
                                title='codigo' 
                                placeholder=''
                                onKeyDown={handleEnter}
                                />
                                <S.FocusInput 
                                htmlFor='code' 
                                className='focus-input' 
                                data-placeholder='Código'></S.FocusInput>
                            </S.WrapInput>

                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="text" 
                                id='nome'
                                title='nome' 
                                placeholder=''
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='nome' 
                                className='focus-input' 
                                data-placeholder='Nome completo *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask 
                                mask="99.999.999-9" 
                                className='input'  
                                id='rg' title='rg' 
                                placeholder='' 
                                name='rg' 
                                onChange={(e) => setRg(e.target.value)} 
                                value={rg} 
                                onKeyDown={handleEnter}
                                />
                                <S.FocusInput htmlFor='rg' className='focus-input' data-placeholder='RG'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput 
                                className="wrap-input">
                                <input
                                maxLength={14}
                                className='input'  
                                id='cpf' 
                                title='cpf' 
                                placeholder=''
                                onBlur={handleChange}
                                ref={ref}
                                onKeyDown={handleEnter}
                                onFocus={handleRef}
                                />
                                <S.FocusInput 
                                htmlFor='cpf' 
                                className='focus-input' 
                                data-placeholder='CPF *'></S.FocusInput>
                                {isCPF(cpf) === true ? (
                                    <span id='valid'>Cpf válido</span>
                                ) : (
                                    <span id='invalid'>Campo vazio ou CPF inválido</span>
                                )}
                                {/* <span id={isCPF(cpf) === true || cpf.length === 0 ? 'valid' : 'invalid'}>Campo vazio ou inválido</span> */}
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask 
                                onKeyDown={handleEnter}
                                mask="99/99/9999" 
                                className='input'  
                                id='nascimento' 
                                title='nascimento' 
                                onChange={(e)=>setBirth(e.target.value)}
                                placeholder='' 
                                value={birth}/>
                                <S.FocusInput 
                                htmlFor='nascimento' 
                                className='focus-input' 
                                data-placeholder='Data de nascimento'>
                                </S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask 
                                mask="99.999-999" 
                                className='input'  
                                id='cep'
                                onChange={checkCEP}
                                title='cep'
                                placeholder=''
                                value={cepState}
                                onKeyDown={handleEnter}
                                />
                                <S.FocusInput 
                                htmlFor='cep' 
                                className='focus-input' 
                                data-placeholder='CEP'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="text" 
                                id='endereco' 
                                defaultValue={street} 
                                title='endereço' 
                                placeholder=''
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='endereco' 
                                className='focus-input' 
                                data-placeholder='Endereço *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="number" 
                                id='numero' 
                                title='numero' 
                                placeholder=''
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='numero' 
                                className='focus-input' 
                                data-placeholder='Nº *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="text" 
                                id='complemento' 
                                title='complemento' 
                                placeholder=''
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='complemento' 
                                className='focus-input' 
                                data-placeholder='Complemento'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="text" 
                                id='bairro' 
                                defaultValue={block} 
                                title='bairro' 
                                placeholder=''
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='bairro' 
                                className='focus-input' 
                                data-placeholder='Bairro *'></S.FocusInput>
                            </S.WrapInput>

                            <SelectUf id='states' name='states' onChange={handleInputChange}/>
                            <SelectCity id='city' name='city' state={formValue.states} onChange={handleInputChange}/>

                            <S.WrapInput className="wrap-input">
                                <InputMask 
                                mask="(99) 99999-9999" 
                                className='input' 
                                onChange={(e)=>setTel1(e.target.value)}  
                                id='telefone1' 
                                title='telefone1'
                                value={tel1} 
                                placeholder='' 
                                name='tel1'
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='telefone1' 
                                className='focus-input' 
                                data-placeholder='Telefone 1 *'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask 
                                mask="(99) 99999-9999" 
                                className='input'  
                                id='telefone2' 
                                title='telefone2' 
                                placeholder='' 
                                onChange={(e) => setTel2(e.target.value)} 
                                value={tel2} 
                                name='tel2'
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='telefone2' 
                                className='focus-input' 
                                data-placeholder='Telefone 2'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <InputMask 
                                mask="(99) 99999-9999" 
                                className='input'  
                                id='telefone3' 
                                onChange={(e) => setTel3(e.target.value)} 
                                value={tel3} 
                                title='telefone3' 
                                name='tel3'
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='telefone3' 
                                className='focus-input' 
                                data-placeholder='Telefone 3' 
                                placeholder=''></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="email" 
                                id='email'
                                autoComplete='off' 
                                title='email'
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email}
                                onBlur={validate}
                                onKeyDown={handleEnter}/>
                                {emailErr && <p>Por favor, digite um email válido</p>}
                                <S.FocusInput 
                                htmlFor='email' 
                                className='focus-input' 
                                data-placeholder='Email'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="text" 
                                id='social' 
                                title='rede-social'
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='social' 
                                className='focus-input' 
                                data-placeholder='Rede Social'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="text" 
                                id='responsavel' 
                                title='responsavel' 
                                placeholder=''
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='responsavel' 
                                className='focus-input' 
                                data-placeholder='Responsável'></S.FocusInput>
                            </S.WrapInput>
                            <S.WrapInput className="wrap-input">
                                <input 
                                className="input" 
                                type="text" 
                                id='observation' 
                                title='observação' 
                                placeholder=''
                                onKeyDown={handleEnter}/>
                                <S.FocusInput 
                                htmlFor='observation' 
                                className='focus-input' 
                                data-placeholder='Observações'></S.FocusInput>
                            </S.WrapInput>
                            <S.ButtonRow className="button-row">
                                <S.FormBtn type="button" className='form-btn'>
                                <img src={check} alt='' />
                                Ok
                                </S.FormBtn>
                                <S.FormBtn type="reset" onClick={limpaCampo} className='form-btn'>
                                <img src={cancel} alt='' />
                                Cancelar
                                </S.FormBtn>
                            </S.ButtonRow>
                        </S.CadastroForm>

                    </S.Wrapper>
                </S.ContainerCadastro>
            </S.Container>
        )
    }
    
    export default Cadastro