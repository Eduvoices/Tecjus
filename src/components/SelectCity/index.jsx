import { useEffect, useState } from 'react'
import * as S from './styles'
import { fetchCitiesByState } from '../../helpers/ibge'

const SelectCity = ({state, onChange=()=>{}}) => {
    const [citites, setCities] = useState([])

    useEffect(()=>{
        fetchCitiesByState(state).then((cities)=>{
            setCities(cities)
        })
    }, [state])

    return (
        <S.Wrap>
            <S.WrapSelect id='city' name='city' onChange={onChange}>
                <S.Option>Cidade</S.Option>
                {citites.map((city)=>{
                    const {id, nome} = city
                    return <S.Option key={id} value={id}>{nome}</S.Option>
                })}
            </S.WrapSelect>
            <S.FocusSelect data-placeholder='Cidade'/>
        </S.Wrap>
    )
}

export default SelectCity