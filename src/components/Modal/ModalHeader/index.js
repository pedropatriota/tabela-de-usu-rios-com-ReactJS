import React from 'react';
import { HeaderWrapper } from './styles';
import Tune from '@material-ui/icons/Tune';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

export default function ModalHeaderComponent({ onClose }){
    return(
        <HeaderWrapper>
            <Tune style={{background:'#fff', color:'#666'}} />
            <h2>Filtros</h2>
            <Button
              style={{background:'#fff', color:'#666'}}
              variant="contained"               
              onClick={onClose}      
            > <CloseIcon />        
            </Button>
        </HeaderWrapper>
    )
}