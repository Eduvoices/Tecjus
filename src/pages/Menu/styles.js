import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #9999;
`

export const ContainerArea = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
`
export const NavContainer = styled.nav`
padding: 8px;


@media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;
}
`
export const List = styled.ul`
display: flex;

align-items: center;
width: 100%;

img {
    cursor: pointer;
    
    @media (max-width: 1023px) {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        padding: 16px;
        cursor: pointer;
    }
}

@media (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
`
export const ListItem = styled.li`
list-style: none;
display: flex;
align-items:center;
justify-content: center;
width: 100%;

`
export const ListAnchor = styled.button`
padding: 16px;
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
width: 100%;
cursor: pointer;

@media (max-width: 1023px) {
    width: 70%;
}

&:hover {
    background-color: #665e53;
}
`
export const Wrapper = styled.main`
width: 100%;
background-color: #fff;
border-radius: 12px;
padding: 32px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
height: 540px;
display: flex;
justify-content: space-between;
margin: 0 16px;

@media (max-width: 1023px) {
    display: block;
    height: 100%;
}
`

export const ButtonRow = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 15%;

@media (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
}

@media (min-width: 1024px) and (max-width: 1260px) {

}
`
export const Favorites = styled.div`
padding: 8px;
font-size: 12px;
color: #c4b69c;
line-height: 1.2;
text-transform: uppercase;
background-color: transparent;
border: none;
height: 48px;
width: 15%;

div {
    display: flex;
    align-item: center;
}

img {
    margin-right: 8px;
}

#icon {
    margin-right: 0;
    margin-left: 4px;
}

&:hover {
    cursor: pointer;
}
`

export const ButtonItem = styled.button`
padding: 8px;
font-size: 12px;
color: #c4b69c;
line-height: 1.2;
text-transform: uppercase;
display: flex;

align-items: center;
background-color: transparent;
width: 100%;
height: 100%;
border: none;

@media (max-width: 1023px) {
    margin: 8px 0;
    width: 100%;
    height: 56px;
}

img {
    margin-right: 8px;
}

#icon {
    margin-right: 0;
    margin-left: 4px;
}

&:hover {
    cursor: pointer;
}
`
export const CentralArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 16px;
color: #c4b69c;

img {
    width: 360px;
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
color: #c4b69c;
margin-left: 8px;

img {
    margin-right: 8px;
}

@media (max-width: 1023px) {
    font-size: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    text-align: center;
}
`