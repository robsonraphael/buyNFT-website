import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components';

export const Global = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    background-color: #151718;

    @media (max-width: 1020px){
        display: flex;
        flex-direction: column;
    }
`