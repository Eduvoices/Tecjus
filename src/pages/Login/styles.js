import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`
export const ContainerLogin = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #4b453d;
`
export const Wrapper = styled.div`
width: 480px;
background-color: #3333;
border-radius: 12px;
overflow: hidden;
padding: 80px 56px 32px 56px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
position: relative;
`
export const FormTitle = styled.span`
display: block;
font-size: 30px;
color: azure;
line-height: 1.2;
text-align: center;
margin: 36px 0;
`
export const LoginForm = styled.form`
width: 100%;

img {
    width: 360px;
}
`
export const WrapInput = styled.div`
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
`


export const FocusInput = styled.span`
position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    color: #adadad;

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

    background: #6a7dfe;
    background: -webkit-linear-gradient(to left, #c9b4a0, #5f3106);
    background: -o-linear-gradient(to left, #c9b4a0, #5f3106);
    background: -moz-linear-gradient(to left, #c9b4a0, #5f3106);
    background: linear-gradient(to left, #c9b4a0, #5f3106);
    }

    &::after {
        font-size: 16px;
    color: #9999;
    line-height: 1.2;
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0;
    padding-left: 8px;
    content: attr(data-placeholder);

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;

    & + .hasValue {
        top: -16px;
    }
    }
`
export const Input = styled.input`
font-size: 16px;
color: #fff;
line-height: 1.2;
border: none;
display: block;
width: 100%;
height: 48px;
background: transparent;
padding: 0 8px;

&:focus {
    outline: 0;

    & + ${FocusInput}::before {
        width: 100%;
    }

    & + ${FocusInput}::after {
        top: -16px;
        transition: all 0.4s;
    }
}
`

export const ContainerFormBtn = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-bottom: 16px;

` 
export const FormBtn = styled.button`
font-size: 16px;
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
background:  #361c04;

&:hover {
    cursor: pointer;
}
`
export const configuration = styled.img`
display: flex;
position: absolute;
top: 0;
right: 0;
padding: 16px;
cursor: pointer;
`
