import exit from '../../assets/log-out.svg'
import activity from '../../assets/monitor.svg'
import money from '../../assets/dollar-sign(1).svg'
import user from '../../assets/user(1).svg'
import building from '../../assets/home(1).svg'
import file from '../../assets/archive(1).svg'
import clock from '../../assets/clock.svg'
import calendar from '../../assets/calendar(1).svg'
import gift from '../../assets/gift(1).svg'
import logo from '../../assets/Logo_page-0001-removebg-preview1.png'


import * as S from './styles'

function Menu() {
    let now = new Date()
    let day = now.getDate().toString().padStart(2, '0')
    let month = String(now.getMonth() + 1).padStart(2, '0')
    let year = now.getFullYear()

    return (
        <>
        <header>
                    <S.NavContainer className='nav-container'>
                    <S.List className='list'>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor className='list-anchor'>Cadastros</S.ListAnchor>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor className='list-anchor'>Processos</S.ListAnchor>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor className='list-anchor'>Finainceiro</S.ListAnchor>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor className='list-anchor'>Consultas</S.ListAnchor>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor className='list-anchor'>Sistema</S.ListAnchor>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor className='list-anchor'>Ajuda</S.ListAnchor>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <img src={exit} alt='Sair do sistema'/>
                        {/* <S.ListAnchor className='sair'>Sair</S.ListAnchor> */}
                    </S.ListItem>
                    </S.List>
                    </S.NavContainer>
        </header>
        <S.Container className="container">
                <S.Wrapper className='wrapper'>
                    <S.ButtonRow className='button-row'>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={activity} alt='Atendimentos' />
                        Atendimentos
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={user} alt='Pessoa Física' />
                        Pessoa Física
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={building} alt='Pessoa Jurídica' />
                        Pessoa Jurídica
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={file} alt='Processos' />
                        Processos
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={clock} alt='Andamentos' />
                        Andamentos
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={calendar} alt='Agenda' />
                        Agenda
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={money} alt='Faturar' />
                        Faturar
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={gift} alt='Aniversários' />
                        Aniversários
                    </S.ButtonItem>
                    </S.ButtonRow>
                    <S.Salute className='salute'>
                    <p>Olá, seja bem vindo ao Tecjus!</p>
                    <S.Birthday className='birthday'>
                        <p>Hoje é {day}/{month}/{year}.</p>
                        <p>Temos aniversário!</p>
                    </S.Birthday>
                    </S.Salute>
                    <S.CentralArea className='central-area'>
                    <img src={logo} alt='Logo do sistema'/>
                    <p>ATENÇÃO! Processo monitorado com movimentação judicial. <br />
                    Clique aqui para visualizar!
                    </p>
                    </S.CentralArea>
                </S.Wrapper>
        </S.Container>
        </>
    );
}

export default Menu