import React from 'react';
import { ModalOverlay, Modal} from './styles';
import ModalHeader from '../Modal/ModalHeader';
import ModalSubtitle from '../Modal/ModalSubtitle';
import ModalFilter from '../Modal/ModalFilter';

export default function ModalComponent({ onClose }){
    return(
        <ModalOverlay>
            <Modal>
                <ModalHeader 
                    onClose = {onClose}   
                />
                <ModalSubtitle />
                <ModalFilter />
            </Modal>
        </ModalOverlay>
    )
};