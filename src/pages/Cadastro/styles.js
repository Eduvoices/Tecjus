import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
margin: 0 auto;
`
export const ContainerCadastro = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 15px;
background-color: #9999;
` 
export const Wrapper = styled.div`
width: 960px;
background-color: #fff;
border-radius: 12px;
overflow: hidden;
padding: 80px 56px 32px 56px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position: relative;
`
export const FormTitle = styled.span`
display: block;
font-size: 24px;
color: #c4b69c;
line-height: 1.2;
text-align: center;
margin: 36px 0;

img {
    width: 360px;

    @media (max-width: 480px) {
        width: 100%;
    }

}
`
export const CadastroForm = styled.form`
line-height: 1.2;
margin: 64px 0;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;

@media (max-width: 1023px) {
    width: 100%;
    display: block;
}
`
export const FocusInput = styled.span`
position: absolute;
text-align: justify;
width: 100%;
height: 100%;
top: 0;
left: 0;
pointer-events: none;
color: #9999;

&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    background: #c9b4a0;
    background: -webkit-linear-gradient(to left, #c9b4a0, #5f3106);
    background: -o-linear-gradient(to left, #c9b4a0, #5f3106);
    background: -moz-linear-gradient(to left, #c9b4a0, #5f3106);
    background: linear-gradient(to left, #c9b4a0, #5f3106);
}

&::after {
    font-size: 12px;
    color: #4b453d;
    line-height: 1.2;
    display: block;
    width: 100%;
    position: absolute;
    top: -16px;
    left: 0;
    padding-left: 8px;
    content: attr(data-placeholder);

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
`

export const WrapInput = styled.div`
position: relative;
border-bottom: 2px solid #adadad;
margin-bottom: 37px;
margin-right: 12px;

@media (max-width: 1023px) {
    width: 100%;
}

#invalid {
font-size: 10px;
color: red;
position: absolute;
text-align: justify;
top: 0;
left: 0;
pointer-events: none;
}

#valid {
    display: none;
}

.input {
    font-size: 16px;
    color: #c4b69c;
    padding: 24px;
    border: none;
    text-align: left;
    height: 48px;
    background-color: transparent;

    @media (max-width: 1023px) {
        width: 100%;
        text-align:center;
    }


    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;
    }


    &:focus {
        outline: 0;

        & + ${FocusInput}::after {
            top: -16px;
            transition: all 0.4s;
        }

        & + ${FocusInput}::before {
            width: 100%;
        }
    }
}

#code, #numero, #uf {
    width: 88px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#uf {
    text-transform: uppercase;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#nome, #responsavel {
    width: 320px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#rg, #social {
    width: 144px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#cpf {
    width: 172px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#nascimento {
    width: 132px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#cep {
    width: 144px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#endereco, #complemento, #cidade {
    width: 240px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#bairro {
    width: 216px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#telefone1, #telefone2, #telefone3 {
    width: 180px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}

#observation {
    width: 400px;

    @media (max-width: 1023px) {
        width: 100%;
    }
}
`

export const Required = styled.span`
font-size: 12px;
color: #c4b69c;
line-height: 1.2;
`

export const ButtonRow = styled.div`
display: flex;
justify-content: center;
width: 100%;

@media (max-width: 480px) {
    width: 100%;
    display: block;
}
`
export const FormBtn = styled.button`
padding: 8px;
font-size: 12px;
border: none;
border-radius: 8px;
color: #fff;
line-height: 1.2;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 48px;
background:  #4b453d;
margin-left: 4px;
position: relative;

    &:hover {
        cursor: pointer;
    }

@media (max-width: 480px) {
    width: 100%;
    margin-bottom: 8px;
}

img {
    margin-right: 8px;
}
`

export const Exit = styled.img`
display: flex;
position: absolute;
top: 0;
right: 0;
padding: 16px;
cursor: pointer;
`

export const Obs = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#textarea {
    resize: none;
    width: 480px;
    height: 240px;
    margin-bottom: 24px;
    text-align: center;
    border-radius: 8px;
    border: 2px solid #4b453d;
    padding: 8px;
    font-size: 14px;
    
    @media (max-width: 480px) {
        width: 100%;
    }
}

h4 {
    color: #c4b69c;
    margin-bottom: 32px;
    font-size: 16px;
    text-decoration: underline #4b453d;
}
`
export const WrapSelect = styled.select`
border: none;
padding: 0 8px;
height: 48px;
background: transparent;
color: #c4b69c;
text-align: center;
font-size: 16px;

&:hover {
    cursor: pointer;
}
`

export const Option = styled.option`
font-size: 16px;
color: #c4b69c;
text-align: center;
line-height: 1.2;
background: #transparent;
padding: 0 8px;
`