import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 1020px){
        margin-right: 10px;
        margin-left: 10px;
    }
`

export const Image = styled.img`
    width: 290px;

    @media (max-width: 1020px){
        width: 200px;
    }
`

export const Wrap = styled.div``
export const Title = styled.h2`
    font-family: 'Inter';
    font-size: 1.1em;
    font-weight: 400;
    color: #fff;

    @media (min-width: 1020px){
        margin-left: 80px;
        margin-top: 10px;
    }
    @media (max-width: 1020px){
        font-size: 0.9em;
        margin-left: 50px;
        margin-top: 5px;
    }
`

export const WrapProfile = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    button {
        @media (min-width: 1020px){
            margin-left: 30px;
        }
        @media (max-width: 1020px){
            margin-left: 20px;
        }
    }
`
export const Profile = styled.img`
    width: 40px;
`
export const ProfileName = styled.h3`
    font-family: 'Inter';
    font-weight: lighter;
    font-size: 0.9em;
    color: #fff;
    
    margin-left: 5px;

`
