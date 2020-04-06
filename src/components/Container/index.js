import React from 'react';

import {Container} from './styles'

export default function SimpleContainer(props) {
  return (    
    <Container>      
      {props.children}
    </Container>
  );
}
