import styled from 'styled-components';


export const Container = styled.button`
    width: 120px;
    height: 30px;

    background-color: #D03852;
    border: none;
    border-radius: 4px;

    font-family: 'Inter';
    font-size: 1em;
    color: #fff;


    &:hover{
        transition: all 0.25s;
        background-color: #d04955;
    }

    @media (max-width: 1020px){
        width: 75px;
        font-size: 0.8em;
    }
`