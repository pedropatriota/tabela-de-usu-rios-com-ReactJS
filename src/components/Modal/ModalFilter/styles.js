import styled from 'styled-components'
import Select from '@material-ui/core/Select';

export const FilterWrapper = styled.div`
    width: 480px;
    height: 340px;
    display: flex;
    flex-flow: column nowrap;    
    justify-content: flex-start;  
    padding: 0 30px;   
    text-transform: uppercase;    
`;

export const SelectCustom = styled(Select)`
    margin-bottom:20px;
    .MuiSelect-select{
        margin-bottom: 20px;
    }
`;

