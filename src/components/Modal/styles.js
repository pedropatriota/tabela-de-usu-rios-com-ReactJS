import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    max-width: 1920px;
    z-index: 2;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
    position: fixed;
    width: 480px;
    z-index: 2;
    right: 0;
    top: 0;
    height: 100vh;    
    background: #f5f5f5;    
`;