import exit from '../../assets/log-out.svg'
import confirm from '../../assets/check.svg'
import cancel from '../../assets/x.svg'

import * as S from './styles'

import { useRef, useState } from 'react'

import { Link } from 'react-router-dom'

function AlteraSenha() {
    const [senhaAtual, setSenhaAtual] = useState('')
    const [novaSenha, setNovaSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    const refSenhaAtual = useRef(null)
    const refNovaSenha = useRef(null)
    const refConfirmaSenha = useRef(null)

    function handleEnter(event) {
        if (event.keyCode === 13) {
            const form = event.target.form
            const index = Array.prototype.indexOf.call(form, event.target)
            form.elements[index + 1].focus()
            event.preventDefault()
        }
    }

    function clear() {
        setConfirmaSenha('')
        setNovaSenha('')
        setSenhaAtual('')
    }

    function checkSenha(e) {
        const novaSenha = refNovaSenha.current.value
        const confirmaNovaSenha = refConfirmaSenha.current.value
        setConfirmaSenha(e.target.value)

        if (novaSenha !== confirmaNovaSenha) {
            refConfirmaSenha.current.value = ''
        }
    }

    function enableBtn() {
        let check = confirmaSenha === novaSenha
        if (senhaAtual && check && novaSenha) {
            return false
        } else {
            return true
        }
    }

    return (
        <S.Container>
            <S.ContainerSenha>
                <S.Wrapper>
                    <Link to='/menu'>
                        <S.Exit src={exit} alt="Voltar ao Menu" />
                    </Link>

                    <S.FormTitle>
                        Alterar Senha
                    </S.FormTitle>

                    <S.FormTitle>
                        <S.Required>*Campo obrigatório</S.Required>
                    </S.FormTitle>

                    <S.SenhaForm>
                        <S.WrapInput>
                            <input 
                            type="password" 
                            id='senha-atual'
                            className='input'
                            title='senha-atual'
                            placeholder=''
                            ref={refSenhaAtual}
                            onBlur={(e) => setSenhaAtual(e.target.value)}
                            onKeyDown={handleEnter}
                            />
                            {senhaAtual !== novaSenha || !senhaAtual ? (<span />) : (<p>Digite uma senha diferente da anterior</p>)}
                            <S.FocusInput htmlFor="senha-atual" data-placeholder='Senha Atual*'></S.FocusInput>
                        </S.WrapInput>

                        <S.WrapInput>
                            <input 
                            type="password"
                            id='nova-senha'
                            className='input'
                            title='nova-senha'
                            placeholder=''
                            onKeyDown={handleEnter}
                            ref={refNovaSenha}
                            onBlur={(e) => setNovaSenha(e.target.value)}
                            />
                            <S.FocusInput htmlFor="nova-senha" data-placeholder='Nova Senha*'></S.FocusInput>
                        </S.WrapInput>

                        <S.WrapInput>
                            <input 
                            type="password"
                            id='confirma-senha'
                            className='input'
                            title='confirma-senha'
                            placeholder=''
                            onKeyDown={handleEnter}
                            ref={refConfirmaSenha}
                            onBlur={checkSenha}
                            />
                            {confirmaSenha === novaSenha || !confirmaSenha ? (<span />) : (<p>Digite uma senha igual</p>)}
                            <S.FocusInput htmlFor="confirma-senha" data-placeholder='Confirmar Senha*'></S.FocusInput>
                        </S.WrapInput>

                        <S.ButtonRow>
                            <S.FormBtn type='button' className={!enableBtn() ? '' : 'disabled'} disabled={enableBtn()}>
                                <img src={confirm} alt="Confirmar" />
                                Confirmar
                            </S.FormBtn>

                            <S.FormBtn type='reset' onClick={clear}>
                                <img src={cancel} alt="Cancelar" />
                                Cancelar
                            </S.FormBtn>
                        </S.ButtonRow>
                    </S.SenhaForm>
                </S.Wrapper>
            </S.ContainerSenha>
        </S.Container>
    )
}

export default AlteraSenha