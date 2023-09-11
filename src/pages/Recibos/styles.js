import { styled } from "styled-components";

export const Dados = styled.div`
padding: 20px;

@media print {
    display: none;
}
`

export const Print = styled.div`
margin: 0 auto;
padding: 20px;
border: 1px solid black;
border-radius: 30px;
width: 960px;
display: none;

@media print {
    display: block;
}

div {
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    h1 {
        padding: 24px;
    }

    p {
        padding: 24px;
        margin: 64px 0;
        text-align: justify;
        line-height: 200%;
    }

    #data {
        margin-bottom: 96px;
    }

    #assinatura {
        padding: 12px;
        border-top: 1px solid black;
        text-transform: uppercase;
    }

    #controle {
        position: relative;


        span {
            position: absolute;
            top: 0;
            right: 0;
            padding: 24px;
        }
    }
}

.canhoto {
    margin-top: 96px;
    padding: 8px 8px 0 8px;
    border-top: 2px dotted black;

    span {
        margin: 8px 0;
    }
}

img {
    width: 360px;
}

#recibo_nome {
    text-transform: uppercase;
}
`