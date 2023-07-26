import exit from '../../assets/log-out.svg'
import logo from '../../assets/Logo_page-0001-removebg-preview1.png'
import file from '../../assets/file-text.svg'
import search from '../../assets/search.svg'
import InputMask from 'react-input-mask'

import * as S from './styles'

import { useState } from 'react'

function Consulta() {
    const [mask, setMask] = useState('')

    function Input() {
    if (mask === 'cpf') {
        return (
        <InputMask mask='999.999.999-99' className='input' />
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

    
        return (
        <S.Container className="container">
                <S.ContainerConsulta className="container-consulta">
                    <S.Wrapper className="wrapper">
                        <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                        <S.FormTitle  className="form-title">
                        <img src={logo} alt="Logo do sistema"/>
                        </S.FormTitle>
    
                            <S.FormTitle className="form-title">
                            Consulta
                            </S.FormTitle>
    
                        <S.ConsultaForm className="consulta-form">
                            
                            <S.WrapInput className="wrap-input">
                                <Input className="input" id=''/>
                                <S.FocusInput className='focus-input' data-placeholder='Informação de busca'></S.FocusInput>
                                
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
    
                        <S.Table>
                            <thead>
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
                            </thead>
    
                            <tbody>
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
                            </tr>
                            </tbody>
                        </S.Table>
    
                        <S.Table>
                            <thead>
                            <th>Telefone 1</th>
                            <th>Telefone 2</th>
                            <th>Telefone 3</th>
                            <th>E-mail</th>
                            <th>Responsável</th>
                            <th>Rede Social</th>
                            <th>Como ?</th>
                            <th>Observação</th>
                            <th>Data de Cadastro</th>
                            </thead>
    
                            <tr>
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
                        </S.Table>

                        <div className='central'>
                        <S.TableResp>
                            <tbody>
                            <tr>
                                <td className='info'>Código</td>
                                <td>1072</td>
                            </tr>
                            <tr>
                                <td className='info'>Nome</td>
                                <td>Priscila Paiva Blasechi</td>
                            </tr>
                            <tr>
                                <td className='info'>CPF</td>
                                <td>000.000.000-00</td>
                            </tr>
                            <tr>
                                <td className='info'>Rua</td>
                                <td>Rua Teste do Teste Teste</td>
                            </tr>
                            <tr>
                                <td className='info'>Número</td>
                                <td>000</td>
                            </tr>
                            <tr>
                                <td className='info'>Bairro</td>
                                <td>Bairro</td>
                            </tr>
                            <tr>
                                <td className='info'>Complemento</td>
                                <td>Complemento</td>
                            </tr>
                            <tr>
                                <td className='info'>CEP</td>
                                <td className>0000-000</td>
                            </tr>
                            <tr>
                                <td className='info'>Cidade</td>
                                <td>Arapongas</td>
                            </tr>
                            <tr>
                                <td className='info'>Data de nascimento</td>
                                <td>01/01/1010</td>
                            </tr>
                            <tr>
                                <td className='info'>Telefone 1</td>
                                <td>(99)99999-9999</td>
                            </tr>
                            <tr>
                                <td className='info'>Telefone 2</td>
                                <td>(99)99999-9999</td>
                            </tr>
                            <tr>
                                <td className='info'>Telefone 3</td>
                                <td>(99)99999-9999</td>
                            </tr>
                            <tr>
                                <td className='info'>E-mail</td>
                                <td>exemplo@exemplo.com</td>
                            </tr>
                            <tr>
                                <td className='info'>Responsável</td>
                                <td>Nome do Responsável</td>
                            </tr>
                            <tr>
                                <td className='info'>Rede Social</td>
                                <td>@exemplo</td>
                            </tr>
                            <tr>
                                <td className='info'>Como ?</td>
                                <td>Exemplo</td>
                            </tr>
                            <tr>
                                <td className='info'>Observação</td>
                                <td>Exemplo</td>
                            </tr>
                            <tr>
                                <td className='info'>Data de cadastro</td>
                                <td>01/01/1010</td>
                            </tr>
                            </tbody>
                        </S.TableResp>
                        </div>
    
                        <S.FormBtn type="submit" className='form-btn'>
                                <img src={file} alt='Cadastro' />
                                    Cadastro
                        </S.FormBtn>
    
                    </S.Wrapper>
                </S.ContainerConsulta>
        </S.Container>
        );
}

export default Consulta