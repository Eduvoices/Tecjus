import exit from './assets/log-out.svg'
import activity from './assets/monitor.svg'
import money from './assets/dollar-sign(1).svg'
import user from './assets/user(1).svg'
import building from './assets/home(1).svg'
import file from './assets/archive(1).svg'
import clock from './assets/clock.svg'
import calendar from './assets/calendar(1).svg'
import gift from './assets/gift(1).svg'
import logo from './assets/Logo_page-0001-removebg-preview1.png'


import './styles.css'

function App() {

  let now = new Date()
  let day = now.getDate().toString().padStart(2, '0')
  let month = String(now.getMonth() + 1).padStart(2, '0')
  let year = now.getFullYear()

  return (
    <>
    <header>
                <nav className='nav-container'>
                <ul className='list'>
                  <li className='list-item'>
                    <button className='list-anchor'>Cadastros</button>
                  </li>
                  <li className='list-item'>
                    <button className='list-anchor'>Processos</button>
                  </li>
                  <li className='list-item'>
                    <button className='list-anchor'>Finainceiro</button>
                  </li>
                  <li className='list-item'>
                    <button className='list-anchor'>Consultas</button>
                  </li>
                  <li className='list-item'>
                    <button className='list-anchor'>Sistema</button>
                  </li>
                  <li className='list-item'>
                    <button className='list-anchor'>Ajuda</button>
                  </li>
                  <li className='list-item'>
                    <img src={exit} alt='Sair do sistema'/>
                  </li>
                </ul>
                </nav>
    </header>
    <div className="container">
              <main className='wrapper'>
                <div className='button-row'>
                  <button className='button-item' type='button'>
                    <img src={activity} alt='Atendimentos' />
                    Atendimentos
                  </button>
                  <button className='button-item' type='button'>
                    <img src={user} alt='Pessoa Física' />
                    Pessoa Física
                  </button>
                  <button className='button-item' type='button'>
                    <img src={building} alt='Pessoa Jurídica' />
                    Pessoa Jurídica
                  </button>
                  <button className='button-item' type='button'>
                    <img src={file} alt='Processos' />
                    Processos
                  </button>
                  <button className='button-item' type='button'>
                    <img src={clock} alt='Andamentos' />
                    Andamentos
                  </button>
                  <button className='button-item' type='button'>
                    <img src={calendar} alt='Agenda' />
                    Agenda
                  </button>
                  <button className='button-item' type='button'>
                    <img src={money} alt='Faturar' />
                    Faturar
                  </button>
                  <button className='button-item' type='button'>
                    <img src={gift} alt='Aniversários' />
                    Aniversários
                  </button>
                </div>
                <div className='salute'>
                  <p>Olá, seja bem vindo ao Tecjus!</p>
                  <div className='birthday'>
                    <p>Hoje é {day}/{month}/{year}.</p>
                    <p>Temos aniversário!</p>
                  </div>
                </div>
                <div className='central-area'>
                  <img src={logo} alt='Logo do sistema'/>
                  <p>ATENÇÃO! Processo monitorado com movimentação judicial. <br />
                  Clique aqui para visualizar!
                  </p>
                </div>
              </main>
    </div>
    </>
  );
}

export default App;
