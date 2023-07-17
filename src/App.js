import exit from './assets/log-out.svg'
import logo from './assets/Logo_page-0001-removebg-preview1.png'
import file from './assets/file-text.svg'
import search from './assets/search.svg'
import InputMask from 'react-input-mask'

import './styles.css'
import { useState } from 'react'

function App() {
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
    <div className="container">
            <div className="container-consulta">
                <div className="wrapper">
                  <img src={exit} alt='Sair do sistema' className='exit'/>
                  <span  className="form-title">
                    <img src={logo} alt="Logo do sistema"/>
                  </span>

                        <span className="form-title">
                        Consulta
                        </span>

                      <form className="consulta-form">
                        <div className="wrap-input">
                            <Input className="input" id=''/>
                            <span className='focus-input' data-placeholder='Informação de busca'></span>
                            
                        </div>

                        <button type='button' className='search-btn'>
                          <img src={search} alt='Pesquisar' />
                        </button>

                        <select className='wrap-select'>
                          <option className='option' onClick={e => setMask('')}>Tipo</option>
                          <option className='option' onClick={e => setMask('')}>Nome</option>
                          <option className='option' onClick={e => setMask('cpf')}>CPF</option>
                          <option className='option' onClick={e => setMask('data')}>Data de cadastro</option>
                        </select>

                        <select className='wrap-select'>
                          <option className='option'>Tipo de consulta</option>
                          <option className='option'>Advogado</option>
                          <option className='option'>Cliente</option>
                          <option className='option'>Funcionário</option>
                          <option className='option'>Pessoa</option>
                          <option className='option'>Parceiro</option>
                          <option className='option'>Usuário</option>
                        </select>
                    </form>

                    <div className='drag'>
                      <p>
                        Arraste um cabeçalho da coluna aqui para agrupar por essa coluna
                      </p>
                    </div>

                    <table>
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
                    </table>

                    <table>
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
                    </table>

                    <button type="submit" className='form-btn'>
                            <img src={file} alt='Cadastro' />
                              Cadastro
                    </button>

                    </div>
            </div>
    </div>
  );
}

export default App;
