import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
margin: 0 auto;
background-color: #4b453d;
height: 100vh;
display: flex;
justify-content: center;
`
export const NavContainer = styled.nav`
background-color: #4b453d;
padding: 24px;
`
export const List = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
`
export const ListItem = styled.li`
list-style: none;

img {
    cursor: pointer;

}
`
export const ListAnchor = styled.button`
padding: 8px;
background-color: transparent;
color: #fff;
cursor: pointer;
width: 160px;
border: none;
`
export const Wrapper = styled.main`
width: 90%;
background-color: #3333;
border-radius: 12px;
overflow: hidden;
padding: 32px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const ButtonRow = styled.div`
display: flex;
justify-content: space-between;
`

export const ButtonItem = styled.button`
padding: 8px;
font-size: 12px;
border: 1px solid #c9b4a0;
border-radius: 8px;
color: #fff;
line-height: 1.2;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
background-color: #575047;
margin-right: 16px;

img {
    margin-right: 8px;
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
export const CentralArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 16px;
margin-top: 240px;
color: #fff;

img {
    width: 240px;
    margin-bottom: 32px;
}

p {
    font-size: 14px;
    padding: 16px;
    border: 1px solid #c9b4a0;
    text-align: center;
    cursor: pointer;
}
`

export const Salute = styled.div`
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;
`
export const Birthday = styled.div`
display: block;

p {
    padding: 8px;
}
`