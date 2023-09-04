import exit from '../../assets/log-out.svg'
import search from '../../assets/search.svg'
import InputMask from 'react-input-mask'
import moreOptions from '../../assets/more-horizontal (1).svg'
import add from '../../assets/plus-minus.svg'
import edit from '../../assets/edit-minus.svg'
import del from '../../assets/x-minus.svg'

import * as S from './styles'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Consulta() {
    const [formValue, setFormValue] = useState('')

    function Input() {
    if (formValue === 'CPF') {
        return (
        <InputMask mask='999.999.999-99' className='input' id='info'/>
        )
    } else if (formValue === 'Data') {
        return (
        <InputMask mask='99/99/9999' className='input' id='info'/>
        )
    } else {
        return (
        <input className="input" id='info'/>
        )
    }
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        const {value} = e.target
        setFormValue(value)
    }
    
        return (
        <S.Container className="container">
                <S.ContainerConsulta className="container-consulta">
                    <S.Wrapper className="wrapper">
                        <Link to='/menu'>
                            <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                        </Link>
                            <S.FormTitle className="form-title">
                            Pessoa Física
                            </S.FormTitle>

                        <S.ConsultaForm className="consulta-form">
                            <S.WrapInput className="wrap-input">
                                <Input />
                                <S.FocusInput htmlFor='info' className='focus-input' data-placeholder='Informação de busca'></S.FocusInput>
                                {/* <span id={isCPF(cpf) === true || cpf.length < 14 ? 'valid' : 'invalid'}>O cpf é inválido</span> */}
                            </S.WrapInput>

                            <S.WrapSelect className='wrap-select' id='wrap-select' onChange={handleInputChange}>
                                <S.Option className='option'>Tipo</S.Option>
                                <S.Option className='option' id='teste'>Nome</S.Option>
                                <S.Option className='option' >CPF</S.Option>
                                <S.Option className='option'>Data</S.Option>
                            </S.WrapSelect>

                            <S.SearchBtn type='button' className='search-btn'>
                                <img src={search} alt='Pesquisar' />
                            </S.SearchBtn>
                        </S.ConsultaForm>
                    
                    <div className='overflow'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Código</th>
                                                <th>Nome</th>
                                                <th>CPF</th>
                                                <th>Endereço</th>
                                                <th>Nº</th>
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
                                                <th>Rede social</th>
                                                <th>Como?</th>
                                                <th>Obs</th>
                                                <th>Data de cadastro</th>
                                            </tr>
                                            
                                            <tr>
                                                <td>
                                                    <div>
                                                        1072
                                                        <div className='dropdown'>
                                                            <img src={moreOptions} alt="Mais opções" />
                                                            <div className='dropdownContent'>
                                                                <div>
                                                                <img src={add} alt="" />
                                                                <Link to='/cadastro'>
                                                                    <p>Inserir</p>
                                                                </Link>
                                                                </div>

                                                                <div>
                                                                <img src={edit} alt="" />
                                                                <Link to='/cadastro'>
                                                                    <p>Alterar</p>
                                                                </Link>
                                                                </div>

                                                                <div>
                                                                <img src={del} alt="" />
                                                                <p>Excluir</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                        Priscila Paiva Blasechi
                                                </td>
                                                <td>
                                                        000.000.000-00
                                                </td>
                                                <td>
                                                        Rua Teste do Teste Teste
                                                </td>
                                                <td>
                                                        000
                                                </td>
                                                <td>
                                                        Bairro
                                                </td>
                                                <td>
                                                        Complemento
                                                </td>
                                                <td>
                                                        00000-000
                                                </td>
                                                <td>
                                                        Arapongas
                                                </td>
                                                <td>
                                                        01/01/1010
                                                </td>
                                                <td>
                                                        (99)99999-9999
                                                </td>
                                                <td>
                                                        (99)99999-9999
                                                </td>
                                                <td>
                                                        (99)99999-9999
                                                </td>
                                                <td>
                                                        exemplo@exemplo.com
                                                </td>
                                                <td>
                                                        Nome do Responsável
                                                </td>
                                                <td>
                                                        @exemplo
                                                </td>
                                                <td>
                                                        Complemento
                                                </td>
                                                <td>
                                                        Exemplo
                                                </td>
                                                <td>
                                                        01/01/1010
                                                </td>
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