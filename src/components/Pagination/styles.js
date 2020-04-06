import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
`;

export const ButtonLeft = styled.button`
    width: 100px;
    height: 60px;
    border: 1px solid #fafafa;
    border-radius: 9px; 
    font-size: 14px;   
    background: #fafafa;
    color: #ababab;
    margin-right: 10px;
    cursor: pointer;
`; 

export const ButtonRight = styled.button`
    width: 100px;
    height: 60px;
    background: #f5f5f5;
    border-radius: 9px; 
    font-size: 14px; 
    color: #ababab;
    border: 3px solid #fff;
    margin-left: 10px; 
    cursor: pointer;   
`;

export const ButtonMiddle = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 9px; 
    font-size: 14px; 
    background: #D83367;
    border: 1px solid #D83367;
    color: #fff;  
    cursor: pointer;  
`;

