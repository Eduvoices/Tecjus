const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

const resToJson = (res) => res.json()

export const parseStates = (states)=>{
    return states.map((states)=>{
        return {value: states.sigla}
    })
}

export const parseCities = (cities)=> {
    return cities.map((city)=>{
        const {id, nome} = city
        return {label: nome, value: id}
    })
}

export const fetchUF = () => {
    const url = `${BASE_URL}/localidades/estados?orderBy=nome`
    return fetch(url).then(resToJson)
}

export const fetchCitiesByState = (state) => {
    if (!state) return Promise.resolve([])
    const url = `${BASE_URL}/localidades/estados/${state}/municipios?orderBy=nome`
    return fetch(url).then(resToJson)
}