import styled from 'styled-components';

export const Container = styled.div`
    background-color: #141312;

    width: 220px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px;

    @media(max-width: 768px){
        position: sticky;
        width: 100%;
        height: 70px;

        flex-direction: row;
        padding: 5;
    }
`
export const Logo = styled.a.attrs(props => ({
    href: props.to
}))`
    background: linear-gradient(75deg, #D44A62, #A1263B);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 1.9em;
    font-family: 'Inter';
    font-weight: Medium;
`
export const Wrapper = styled.div`
    height: 200px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media(max-width: 768px){
        display: none;
    }
`
export const Link = styled.a.attrs(props => ({
    href: `#${props.to}`
}))`
    text-decoration: none;
    font-size: 1em;
    font-family: 'Inter';
    color: gray;

    margin-left: 10px;

    display: flex;
    align-items: center;
    gap: 5px;

    ion-icon {
        font-size: 18px;
    }

    &:hover{
        transition: ease 0.5s;
        color: #d44a62;
    }
`
export const Title = styled.h2`
    font-size: 0.9em;
    font-weight: normal;
    color: #D44A62;
    font-family: 'Inter';
`
export const Division = styled.div`
    width: 100%;
    height: 2px;

    background: linear-gradient(220deg, gray, #141516);
    border-radius: 2px;

    @media(max-width: 768px){
        display: none;
    }
`

export const Mobile = styled.button`
    display: none;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    
    background-color: #151718;
    border-radius: 50%;
    border: none;
    
    width: 35px;
    height: 35px; 
    
    &:active{
        background-color: #d44a62;
        
        ion-icon{
            color: #151718;
        }
    }

    &:hover{
        background-color: #d44a62;

        ion-icon{
            color: #151718;
        }
    }

    ion-icon {
        color: #d44a62;
        font-size: 2.4em;
    }

    @media(max-width: 768px){
        display: flex;
    }
`

export const MenuMobile = styled.div`
    display: ${props => props.active? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: absolute;
    top: 70px;
    left: 0;

    width: 100%;
    height: 100vw;

    background-color: #101010;
    a {
        font-size: 1.5em;
        font-weight: bold;

        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        width: 490px;
        height: 60px;
        
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`