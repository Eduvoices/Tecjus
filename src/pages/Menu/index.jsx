import exit from '../../assets/log-out.svg'
import activity from '../../assets/monitor.svg'
import money from '../../assets/dollar-sign(1).svg'
import user from '../../assets/user(1).svg'
import file from '../../assets/archive(1).svg'
import clock from '../../assets/clock.svg'
import calendar from '../../assets/calendar(1).svg'
import logo from '../../assets/Logo_page-0001-removebg-preview1.png'
import star from '../../assets/star.svg'
import arrowDown from '../../assets/arrow-down.svg'
import close from '../../assets/arrow-up.svg'
import userPlus from '../../assets/user-plus.svg'
import settings from '../../assets/settings2.svg'

import { Link } from "react-router-dom";

import * as S from './styles'
import { useEffect, useState } from 'react'

function Menu() {
    const [now, setNow] = useState(new Date())
    const [favorites, setFavorites] = useState(false)

    function onClick() {
        setFavorites(!favorites)
    }

    function icon() {
        if (favorites === false) {
            return (
                <img src={arrowDown} alt='Favoritos' id='icon'/>
            )
            } else {
                return (
                    <img src={close} alt='Fechar favoritos' id='icon' />
                )
        }
    }

    useEffect(() => {
        setInterval(() => {
            setNow(new Date())
        }, 3000);
    }, [])

    let day = now.getDate().toString().padStart(2, '0')
    let month = String(now.getMonth() + 1).padStart(2, '0')
    let year = now.getFullYear()
    let hour = now.getHours().toString().padStart(2, '0')
    let minute = now.getMinutes().toString().padStart(2, '0')

    return (
        <S.Container>
        <header>
                    <S.NavContainer className='nav-container'>
                    <S.List className='list'>
                    <S.ListItem className='list-item'>
                        <S.Dropdown className='dropdown'>
                        <S.ListAnchor type='button' className='dropBtn'>Cadastros</S.ListAnchor>
                        <div className='dropdownContent'>
                            <Link to='/cadastro'>
                                <S.ListAnchor type='button' className='list-anchor'>
                                    <img src={user} alt="" />
                                    Pessoa Física
                                </S.ListAnchor>
                            </Link>

                            <Link to='/usercadastro'>
                                <S.ListAnchor type='button' className='list-anchor'>
                                    <img src={userPlus} alt="" />
                                    Usuário
                                </S.ListAnchor>
                            </Link>
                        </div>
                        </S.Dropdown>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor type='button' className='list-anchor'>Processos</S.ListAnchor>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.Dropdown>
                            <S.ListAnchor type='button' className='list-anchor'>Consultas</S.ListAnchor>
                            <div className='dropdownContent'>
                                <Link to='/consulta'>
                                    <S.ListAnchor type='button' className='list-anchor'>
                                        <img src={user} alt="" />
                                        Pessoa Física
                                    </S.ListAnchor>
                                </Link>
                            </div>
                        </S.Dropdown>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.Dropdown>
                            <S.ListAnchor type='button' className='list-anchor'>Financeiro</S.ListAnchor>
                            <div className="dropdownContent">
                                <Link to='/recibos'>
                                    <S.ListAnchor type='button' className='list-anchor'>
                                        <img src={money} alt="" />
                                        Recibos
                                    </S.ListAnchor>
                                </Link>
                            </div>
                        </S.Dropdown>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.Dropdown>
                            <S.ListAnchor type='button' className='list-anchor'>Sistema</S.ListAnchor>
                            <div className='dropdownContent'>
                                <Link to='/alterarsenha'>
                                    <S.ListAnchor type='button' className='list-anchor'>
                                        <img src={settings} alt="" />
                                        Alterar Senha
                                    </S.ListAnchor>
                                </Link>
                            </div>
                        </S.Dropdown>
                    </S.ListItem>
                    <S.ListItem className='list-item'>
                        <S.ListAnchor type='button' className='list-anchor'>Ajuda</S.ListAnchor>
                    </S.ListItem>
                    <S.ListTeste>
                    <Link to="/">
                        <S.Exit src={exit} alt='Sair do sistema' className='exit'/>
                    </Link>
                    </S.ListTeste>
                    </S.List>
                    </S.NavContainer>
        </header>
        <S.ContainerArea className="container">
                <S.Wrapper className='wrapper'>
                
                {favorites === false ? (
                    <S.Favorites
                    className='button-item' 
                    type='button'
                    onClick={onClick}
                    >
                        <img src={star} alt='Favoritos' />
                        Favoritos
                        {icon()}
                    </S.Favorites>
                    
                        ) : (
                <S.ButtonRow>
                    <S.ButtonItem 
                    className='button-item' 
                    type='button'
                    onClick={onClick}
                    >
                        <img src={star} alt='Favoritos' />
                        Favoritos
                        {icon()}
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={calendar} alt='Agenda' />
                        Agenda
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={clock} alt='Andamentos' />
                        Andamentos
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={activity} alt='Atendimentos' />
                        Atendimentos
                    </S.ButtonItem>
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={file} alt='Faturar' />
                        Faturar
                    </S.ButtonItem>
                    
                    <S.ButtonItem className='button-item' type='button'>
                    <S.StyledLink to='/cadastro'>
                        <img src={user} alt='Pessoa Física' />
                        Pessoa Física
                    </S.StyledLink>
                    </S.ButtonItem>
                    
                    <S.ButtonItem className='button-item' type='button'>
                        <img src={money} alt='Receber' />
                        Receber
                    </S.ButtonItem>
                </S.ButtonRow>
                        )}
                    <S.CentralArea className='central-area'>
                    <img src={logo} alt='Logo do sistema'/>
                    </S.CentralArea>

                    
                    <S.Salute className='salute'>
                        <p><img src={calendar} alt="ícone de calendário" />{day}/{month}/{year}</p>
                        <p>
                            <img src={clock} alt="ícone de relógio" />{hour}:{minute}
                        </p>
                    </S.Salute>

                </S.Wrapper>
        </S.ContainerArea>
        </S.Container>
    );
}

export default Menu