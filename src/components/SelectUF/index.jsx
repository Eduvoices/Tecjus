import { useEffect, useState } from 'react'
import * as S from './styles'
import { fetchUF } from '../../helpers/ibge'

const SelectUf = ({onChange = () => {}}) => {
    const [states, setStates] = useState([])

    useEffect(() => {
        fetchUF().then((states)=>{
            setStates(states)
        })
    }, [])



    return (
        <S.Wrap>
            <S.WrapSelect id='states' name='states' onChange={onChange}>
                <S.Option>UF</S.Option>
                {states.map((state)=>{
                    const {sigla} = state
                    return <S.Option key={sigla} value={sigla}>{sigla}</S.Option>
                })}
            </S.WrapSelect>
            <S.FocusSelect data-placeholder='UF'/>
        </S.Wrap>
    )
}

export default SelectUf