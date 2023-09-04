import { useEffect, useState } from 'react'
import * as S from './styles'
import { fetchUF, parseStates } from '../../helpers/ibge'

const SelectUf = ({id, name, onChange = () => {}}) => {
    const [states, setStates] = useState([])

    useEffect(() => {
        fetchUF().then(parseStates).then(setStates)
    }, [])



    return (
        <S.Wrap>
            <S.WrapSelect id={id || name} name={name || id} onChange={onChange} title='select de estados(UF)' required>
                <S.Option value=''>UF</S.Option>
                {states.map((state)=>{
                    const {value} = state
                    return <S.Option key={value} value={value}>{value}</S.Option>
                })}
            </S.WrapSelect>
            <S.FocusSelect data-placeholder='UF *'/>
        </S.Wrap>
    )
}

export default SelectUf