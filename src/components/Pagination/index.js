import React from 'react';
import { Wrapper, ButtonLeft, ButtonRight, ButtonMiddle } from './styles';

export default function Pagination(){
    return(
        <Wrapper>
            <ButtonLeft>Primeiro</ButtonLeft>
            <ButtonLeft>Anterior</ButtonLeft>
            <ButtonMiddle>1</ButtonMiddle>
            <ButtonRight>Primeiro</ButtonRight>
            <ButtonRight>Anterior</ButtonRight>
        </Wrapper>
    )
}