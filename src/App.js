import exit from './assets/log-out.svg'
import logo from './assets/Logo_page-0001-removebg-preview1.png'
import add from './assets/plus-circle.svg'
import editIcon from './assets/edit.svg'
import del from './assets/trash-2.svg'
import check from './assets/check.svg'
import cancel from './assets/x.svg'
import file from './assets/file-text.svg'
import search from './assets/search.svg'

import './styles.css'
import { useState } from 'react'

function App() {
  const [edit, setEdit] = useState(false)

  function onClick() {
    setEdit(!edit)
  }

  return (
    <div className="container">
            <div className="container-cadastro">
                <div className="wrapper">
                  <img src={exit} alt='Sair do sistema' className='exit'/>
                  <span  className="form-title">
                            <img src={logo} alt="Logo do sistema"/>
                        </span>

                        <span className="form-title">
                        Cadastro
                        </span>

                      <form className="cadastro-form">
                        <div className="wrap-input">
                            <input className="input" type="text" id='nome'/>
                            <span className='focus-input' data-placeholder='Nome completo'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='rg'/>
                            <span className='focus-input' data-placeholder='RG'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='cpf'/>
                            <span className='focus-input' data-placeholder='CPF'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='nascimento'/>
                            <span className='focus-input' data-placeholder='Data de nascimento'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='cep'/>
                            <span className='focus-input' data-placeholder='CEP'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="text" id='endereco'/>
                            <span className='focus-input' data-placeholder='Endereço'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='numero'/>
                            <span className='focus-input' data-placeholder='Nº'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="text" id='complemento'/>
                            <span className='focus-input' data-placeholder='Complemento'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="text" id='bairro'/>
                            <span className='focus-input' data-placeholder='Bairro'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="text" id='cidade'/>
                            <span className='focus-input' data-placeholder='Cidade'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='uf'/>
                            <span className='focus-input' data-placeholder='UF'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='telefone1'/>
                            <span className='focus-input' data-placeholder='Telefone 1'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='telefone2'/>
                            <span className='focus-input' data-placeholder='Telefone 2'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="number" id='telefone3'/>
                            <span className='focus-input' data-placeholder='Telefone 3'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="email" id='email'/>
                            <span className='focus-input' data-placeholder='Email'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="text" id='social'/>
                            <span className='focus-input' data-placeholder='Rede Social'></span>
                        </div>
                        <div className="wrap-input">
                            <input className="input" type="text" id='responsavel'/>
                            <span className='focus-input' data-placeholder='Responsável'></span>
                        </div>
                        
                          
                    </form>

                    <div className='obs'>
                    <h4>Observações</h4>
                    <textarea id='textarea'/>

                    </div>
                        
                        <div className="button-row">
                            
                              {edit === true ? (
                                <>
                                  <button type="button" className='form-btn'>
                            <img src={check} alt='' />
                              Ok
                              </button>
                            <button type="button" className='form-btn' onClick={onClick}>
                            <img src={cancel} alt='' />
                              Cancelar
                              </button>
                            <button type="button" className='form-btn'>
                            <img src={file} alt='' />
                              Cadastro
                              </button>
                                </>
                              ) : (
                                <>
                                  <button type="button" className='form-btn'>
                              <img src={add} alt='Inserir'/>
                              Inserir
                              </button>
                            <button type="button" className='form-btn' onClick={onClick}>
                              <img src={editIcon} alt='' />
                              Alterar
                              </button>
                            <button type="button" className='form-btn'>
                            <img src={del} alt='' />
                              Excluir
                              </button>
                                </>
                              )}
                            
                            <button type="button" className='form-btn'>
                            <img src={search} alt='' />
                              Consulta
                              </button>
                              
                        </div>
                        
                </div>
            </div>
        </div>
  );
}

export default App;
