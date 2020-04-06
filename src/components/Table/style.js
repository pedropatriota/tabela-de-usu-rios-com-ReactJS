import styled from 'styled-components';
import { TableContainer, TableRow, TableHead, TableCell } from '@material-ui/core';

export const TableWrapper = styled(TableContainer)`
    padding: 20px 2% 0 2%;
    width: 100%;    
    border-radius: 10px;
`;

export const IconWrapper = styled.div`
    opacity: 1 !important;
    color: #666;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export const Row = styled(TableRow)`
    background: ${props => props.row % 2 === 0 ? '#dfdfdf' : "#f5f5f5"};
    &:hover{      
        border-bottom: 3px solid #D83367;
        background-color: #fff;               
    }
`;

export const CellIcon = styled(TableCell)`
    width:11%;    
`;

export const Head = styled(TableHead)`
    background: #fff;
`;

export const CellTitle = styled(TableCell)`
    color: #393939;
    text-transform: uppercase;
    font-weight: 700;    
`;

export const Cell = styled(TableCell)`
    color: #666;
    font-weight: 600;    
`;

export const CellStatus = styled(TableCell)`
    color: #3CBD2B;    
    font-weight: 700;
    
`;

