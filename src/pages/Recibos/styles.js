import { styled } from "styled-components";

export const Dados = styled.div`
padding: 20px;

@media print {
    display: none;
}
`

export const Print = styled.div`
margin: 10px;
padding: 20px;
border: 1px solid black;
border-radius: 30px;
width: 600px;
display: none;

@media print {
    display: block;
}

img {
    padding: 16px;
}

.title {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;

}


div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        padding: 16px;
    }
}

h1 {
    margin-bottom: 20px;
}

h4 {
    padding: 10px;
    border: 1px solid black;
    border-radius: 20px;
    display: inline-block;
    margin-left: 10px;
}

.assinatura {
    border-top: 1px solid black;
    text-align: center;
    margin-top: 64px;
}

#recibo_emitente, #recibo_nome {
    text-transform: capitalize;
}
`