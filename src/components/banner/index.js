import React from 'react';
import {Container, Image, Button, Text} from './styles';
import PNG from "../../img/banner.png";

export default function Banner({text, textBtn}){
    return(
        <Container>
            <Image src={PNG}/>
            <Text>{text}</Text>
            <Button>{textBtn}</Button>
        </Container>
    )
}