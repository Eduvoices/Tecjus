import { useEffect, useState } from 'react'
import * as S from './styles'
import { fetchCitiesByState, parseCities } from '../../helpers/ibge'

const SelectCity = ({id, name, state, onChange=()=>{}}) => {
    const [cities, setCities] = useState([])

    useEffect(()=>{
        fetchCitiesByState(state).then(parseCities).then((cities)=>{
            setCities(cities)
        })
    }, [state])

    return (
        <S.Wrap>
            <S.WrapSelect id={id || name} name={name || id} onChange={onChange} title='select de cidades' required>
                <S.Option value=''>Cidade</S.Option>
                {cities.map((city)=>{
                    const {value, label} = city
                    return <S.Option key={value} value={value}>{label}</S.Option>
                })}
            </S.WrapSelect>
            <S.FocusSelect data-placeholder='Cidade *'/>
        </S.Wrap>
    )
}

export default SelectCity