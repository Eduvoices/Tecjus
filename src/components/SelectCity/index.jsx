import { useEffect, useState } from 'react'
import * as S from './styles'
import { fetchCitiesByState, parseCities } from '../../helpers/ibge'

const SelectCity = ({id, name, city, state, uf, onChange=()=>{}}) => {
    const [cities, setCities] = useState([])

    useEffect(()=>{
        fetchCitiesByState(state || uf).then(parseCities).then((cities)=>{
            setCities(cities)
        })
    }, [state, uf])

    return (
        <S.Wrap>
            <S.WrapSelect id={id || name} name={name || id} onChange={onChange} title='select de cidades' required>
            {city ? (
                    <S.Option value={city}>{city}</S.Option>
                ) : (<S.Option value=''>Cidade</S.Option>)}
                
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