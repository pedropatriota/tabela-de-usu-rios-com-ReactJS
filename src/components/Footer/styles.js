import styled from 'styled-components'

export const Footer= styled.div`
    width: 100%;
    height: 45px;
    bottom:0;
    display: flex;
    background: #333;
    flex-flow: row nowrap;    
    justify-content: space-between;  
    padding: 0 15px;   
    text-transform: uppercase; 
    
    ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size:12px;
        color: #dfdfdf;
        li{
            display:flex;
            align-items:center;            
        }
    }
    ul:first-child{
        width: 50%;
        li:first-child{
            color: #F28102;
        }
    }
    ul:nth-child(2){
        width:25%;
        li:last-child{
            color: #F28102;
            font-size:22px;
        }
    } 
`;


