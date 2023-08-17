import exit from '../../assets/log-out.svg'
import search from '../../assets/search.svg'
import InputMask from 'react-input-mask'

import * as S from './styles'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Consulta() {
    const [mask, setMask] = useState('')
    const [cpf, setCPF] = useState('')

    function validCPF(e) {
        setCPF(e.target.value)
    }

    function Input() {
    if (mask === 'cpf') {
        return (
        <InputMask mask='999.999.999-99' className='input' onBlur={validCPF} defaultValue={cpf}/>
        )
    } else if (mask === 'data') {
        return (
        <InputMask mask='99/99/9999' className='input'/>
        )
    } else {
        return (
        <input className="input" id=''/>
        )
    }
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
    
        return (
        <S.Container className="container">
                <S.ContainerConsulta className="container-consulta">
                    <S.Wrapper className="wrapper">
                        <Link to='/'>
                            <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                        </Link>
                            <S.FormTitle className="form-title">
                            Pessoa Física
                            </S.FormTitle>

                        <S.ConsultaForm className="consulta-form">
                            <S.WrapInput className="wrap-input">
                                <Input className="input" id=''/>
                                <S.FocusInput className='focus-input' data-placeholder='Informação de busca'></S.FocusInput>
                                <span id={isCPF(cpf) === true || cpf.length < 14 ? 'valid' : 'invalid'}>O cpf é inválido</span>
                            </S.WrapInput>

                            <S.WrapSelect className='wrap-select'>
                                <S.Option className='option' onClick={e => setMask('')}>Tipo</S.Option>
                                <S.Option className='option' onClick={e => setMask('')}>Nome</S.Option>
                                <S.Option className='option' onClick={e => setMask('cpf')}>CPF</S.Option>
                                <S.Option className='option' onClick={e => setMask('data')}>Data de cadastro</S.Option>
                            </S.WrapSelect>
    
                            <S.WrapSelect className='wrap-select'>
                                <S.Option className='option'>Tipo de consulta</S.Option>
                                <S.Option className='option'>Advogado</S.Option>
                                <S.Option className='option'>Cliente</S.Option>
                                <S.Option className='option'>Funcionário</S.Option>
                                <S.Option className='option'>Pessoa</S.Option>
                                <S.Option className='option'>Parceiro</S.Option>
                                <S.Option className='option'>Usuário</S.Option>
                            </S.WrapSelect>

                            <S.SearchBtn type='button' className='search-btn'>
                                <img src={search} alt='Pesquisar' />
                            </S.SearchBtn>
                        </S.ConsultaForm>
    
                        <S.Drag className='drag'>
                            <p>
                            Arraste um cabeçalho da coluna aqui para agrupar por essa coluna
                            </p>
                        </S.Drag>
                    
                    <div className='overflow'>
                                    <table>
                                        <tbody>
                                        <tr>
                                        <th>Código</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Rua</th>
                                            <th>Número</th>
                                            <th>Bairro</th>
                                            <th>Complemento</th>
                                            <th>CEP</th>
                                            <th>Cidade</th>
                                            <th>Data de nascimento</th>
                                            <th>Telefone 1</th>
                                            <th>Telefone 2</th>
                                            <th>Telefone 3</th>
                                            <th>E-mail</th>
                                            <th>Responsável</th>
                                            <th>Rede Social</th>
                                            <th>Como ?</th>
                                            <th>Observação</th>
                                            <th>Data de Cadastro</th>
                                        </tr>
                                        <tr>
                                        <td>1072</td>
                                        <td>Priscila Paiva Blasechi</td>
                                        <td>000.000.000-00</td>
                                        <td>Rua Teste do Teste Teste</td>
                                        <td>000</td>
                                        <td>Bairro</td>
                                        <td>Complemento</td>
                                        <td>00000-000</td>
                                        <td>Arapongas</td>
                                        <td>01/01/1010</td>
                                        <td>(99)99999-9999</td>
                                        <td>(99)99999-9999</td>
                                        <td>(99)99999-9999</td>
                                        <td>exemplo@exemplo.com</td>
                                        <td>Nome do Responsável</td>
                                        <td>@exemplo</td>
                                        <td>Complemento</td>
                                        <td>Exemplo</td>
                                        <td>01/01/1010</td>
                                        </tr>
                                        </tbody>
                                        
                                    </table>
                    </div>

                    </S.Wrapper>
                </S.ContainerConsulta>
        </S.Container>
        );
}

export default Consulta