import { styled } from "styled-components";

export const FocusSelect = styled.span`
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

export const Wrap = styled.div`
position: relative;
border-bottom: 2px solid #adadad;
margin-bottom: 37px;
margin-right: 12px;

button {
    font-size: 10px;
    border: none;
    background-color: transparent;
    color: #c4b69c;
    

    &:hover {
        cursor: pointer;
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

        & + ${FocusSelect}::after {
            top: -16px;
            transition: all 0.4s;
        }

        & + ${FocusSelect}::before {
            width: 100%;
        }
    }
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
background: transparent;
padding: 0 8px;
`