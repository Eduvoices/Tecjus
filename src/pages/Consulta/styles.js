import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
margin: 0 auto;
`
export const ContainerConsulta = styled.div`
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
width: 100%;
background-color: #fff;
border-radius: 12px;
overflow: hidden;
padding: 32px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position: relative;


.overflow {
    overflow-x: scroll;

}


table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    margin-top: 32px;
    color: #c4b69c;
    font-size: 12px;
    text-align: center;
    border-radius: 8px;
    padding: 8px;
    background: #fff;
    }

    th, td {
    text-align: left;
    padding: 8px;
    width: 100%;
    border: 1px solid #000;
    }

    th {
        background: #535c68;
    }
`
export const FormTitle = styled.span`
display: block;
font-size: 24px;
color: #c4b69c;
line-height: 1.2;
text-align: center;
margin: 36px 0;

img {
    width: 240px;
}
`
export const ConsultaForm = styled.form`
display: flex;
flex-wrap: wrap;
gap: 16px;
font-size: 30px;
color: #c4b69c;
line-height: 1.2;
text-align: center;
margin: 48px 0;
justify-content: center;
align-items: center;

@media (max-width: 1023px) {
    display: block;
    width: 100%
}
`
export const FocusInput = styled.span`
position: absolute;
display: block;
width: 100%;
height: 100%;
top: 0;
left: 0;
pointer-events: none;
color: #c4b69c;

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
    color: #c4b69c;
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
display: flex;

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

@media (max-width: 1023px) {
    display: block;
    margin-bottom: 8px;
}

.input {
    font-size: 16px;
    color: #c4b69c;
    line-height: 1.2;
    border: none;
    width: 360px;
    height: 48px;
    background: transparent;
    padding: 0 8px;
    text-align: center;

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
export const WrapSelect = styled.select`
border: 2px solid #adadad;
padding: 0 8px;
height: 48px;
background: transparent;
color: #c4b69c;
text-align: center;
font-size: 16px;

@media (max-width: 1023px) {
    width: 100%;
    margin-bottom: 8px;
}

&:hover {
    cursor: pointer;
}
`

export const Option = styled.option`
font-size: 16px;
color: #c4b69c;
text-align: center;
line-height: 1.2;
background: #fff;
padding: 0 8px;
`
export const SearchBtn = styled.button`
height: 48px;
width: 48px;
padding: 0 8px;
border: 2px solid #adadad;
border-radius: 8px;
background-color: transparent;

@media (max-width: 1023px) {
    margin: 8px 0;
    width: 100%;
}

&:hover {
    cursor: pointer;
    background: #c9b4a0;
    background: -webkit-linear-gradient(to left, #c9b4a0, #5f3106);
    background: -o-linear-gradient(to left, #c9b4a0, #5f3106);
    background: -moz-linear-gradient(to left, #c9b4a0, #5f3106);
    background: linear-gradient(to left, #c9b4a0, #5f3106);
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

export const Drag = styled.div`
padding: 16px;
border: 2px dotted #c9b4a0;
width: 100%;

p {
    color: #c4b69c;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
}
`