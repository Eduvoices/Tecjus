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
width: 1280px;
height: 100%;
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
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

@media (max-width: 1023px) {
    width: 100%;
    display: block;
}
`
export const FocusInput = styled.label`
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
export const FocuSpan = styled.span`
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

.radio {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 240px;

    div {
        margin-right: 24px;
    }

    input {
        margin-right: 4px;
    }

    label {
        margin-right: 8px;
        color: #c4b69c;
    }
}


@media (max-width: 1023px) {
    width: 100%;
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
`

export const Exit = styled.img`
display: flex;
position: absolute;
top: 0;
right: 0;
padding: 16px;
cursor: pointer;
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
export const ButtonRow = styled.div`
display: flex;
justify-content: center;
width: 100%;

@media (max-width: 480px) {
    width: 100%;
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
width: 240px;
height: 48px;
background:  #4b453d;
margin-left: 4px;
position: relative;

    &:hover {
        cursor: pointer;
        filter: brightness(80%);
    }

@media (max-width: 480px) {
    width: 100%;
    margin-bottom: 8px;
}

img {
    margin-right: 8px;
}
`