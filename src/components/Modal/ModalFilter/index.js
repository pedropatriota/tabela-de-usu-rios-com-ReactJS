import React, { useState } from 'react';
import { FilterWrapper, SelectCustom } from './styles'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';
import Button from '@material-ui/core/Button';

export default function ModalSubtitle(){       
    
    const [state, setState] = useState({
        inclusão: '',
        alteração: '',
        status: '',
    });
    
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };

    const input = {        
        fontWeight: '700', 
        color: '#D83367', 
        display: 'flex', 
        alignItems:'center'      
    };
          
    return (
        <FilterWrapper>
            <FormControl >
                <InputLabel htmlFor="inclusao" 
                style={input}
                >
                    <DateRangeIcon />
                    Todas a datas de inclusão</InputLabel>
                <SelectCustom                    
                    native
                    value={state.inclusão}
                    onChange={handleChange}
                    inputProps={{
                        name: 'inclusao',
                        id: 'inclusao',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={''}></option>                
                </SelectCustom>
            </FormControl>

            <FormControl >
                <InputLabel htmlFor="alteracao"
                    style={input}
                >
                    <DateRangeIcon />
                    Todas a datas de alteração</InputLabel>
                <SelectCustom                    
                    native
                    value={state.alteracao}
                    onChange={handleChange}
                    inputProps={{
                        name: 'alteracao',
                        id: 'alteracao',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={''}></option>                
                </SelectCustom>
            </FormControl>

            <FormControl >
                <InputLabel htmlFor="status"
                style={input}
                >
                    <HdrStrongIcon />
                    Ativos e Inativos</InputLabel>
                <SelectCustom                    
                    native
                    value={state.status}
                    onChange={handleChange}
                    inputProps={{
                        name: 'status',
                        id: 'status',
                    }}                    
                    >
                    <option aria-label="None" value="" />
                    <option value={''}></option>                
                </SelectCustom>
            </FormControl>

            <Button style={{height:'65px'}} variant="outlined" color="secondary" type='submit' disabled>
                    APLICAR
            </Button>

        </FilterWrapper>
    )
};