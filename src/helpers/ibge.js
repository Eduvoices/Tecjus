const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

export const fetchUF = () => {
    const url = `${BASE_URL}/localidades/estados?orderBy=nome`
    return fetch(url).then(res => res.json())
}

export const fetchCitiesByState = (state) => {
    const url = `${BASE_URL}/localidades/estados/${state}/municipios?orderBy=nome`
    return fetch(url).then(res => res.json())
}