import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 12rem;

    margin-top: 20px;

    @media (max-width: 1020px){
        width: 90%;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`
export const Text = styled.h2`
    font-family: 'Inter';
    font-weight: bold;
    font-size: 1.5em;
    color: #fff;

    position: absolute;
    top: 120px;
    left: 280px;

    width: 150px;

    @media (max-width: 1020px){
        top: 170px;
        left: 80px;

        font-size: 1.2em;
    }
    
`
export const Button = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 50px;

    font-family: 'Inter';
    font-weight: bold;
    font-size: 1.1em;
    color: #101010;

    width: 120px;
    height: 40px;

    position: absolute;
    top: 190px; 
    left: 280px;
    cursor: pointer;

    &:hover{
        transition: ease 0.2s;
        background-color: #d9d9d9;
    }

    @media (max-width: 1020px){
        top: 230px;
        left: 80px;

        width: 85px;
        height: 25px;

        font-size: 0.7em;
    }
`