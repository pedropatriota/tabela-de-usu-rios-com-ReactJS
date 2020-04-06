import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { TableWrapper, Row, Head, Cell, CellTitle, CellStatus, CellIcon, IconWrapper } from './style';
import { Table, TableRow, TableBody, FormControlLabel , Checkbox, IconButton } from '@material-ui/core';
import { MoreHoriz, Security, Delete, Create, Archive} from '@material-ui/icons';

export default function TableUser(){  
    const[user, setUser] = useState([])
    const[icon, setIcon] = useState({
        showIcons: false,
        indexRow: null,
    });      
        
    useEffect(()=>{
        api.get('user?p=1&l=6').then(response =>{
            setUser(response.data)
        })
    },[user])
    
    

    useEffect(
        () => {          
            document.addEventListener('mouseenter', handleMouseEnter);
            document.addEventListener('mouseleave', handleMouseLeave);    
            return () => {
              document.removeEventListener('mouseenter', handleMouseEnter);
              document.removeEventListener('mouseleave', handleMouseLeave);
            };
          },[] 
      );

    const handleMouseEnter = (e) => {
        e.preventDefault()
        setIcon({
            showIcons: true,
            indexRow: Number(e.currentTarget.id),
        });
        console.log(icon)        
    }; 
    
    const handleMouseLeave = (e) => {
        e.preventDefault()
        setIcon({
            showIcons: false,
            indexRow: Number(e.currentTarget.id),
        });
        console.log(icon)        
    }; 

    const rowChange={
        opacity: '0.3'
    };


    return(
        <TableWrapper>
            <Table>            
                <Head>
                    <TableRow>
                        <CellTitle></CellTitle>
                        <CellTitle>usuário</CellTitle>
                        <CellTitle>email</CellTitle>
                        <CellTitle>data de inclusão</CellTitle>
                        <CellTitle>data de alteração</CellTitle>
                        <CellTitle>regras</CellTitle>
                        <CellTitle>status</CellTitle>
                        <CellTitle></CellTitle>
                        <CellTitle>açoes</CellTitle>
                    </TableRow>
                </Head>
                <TableBody>
                    {user.map((user, index) =>(
                        <Row 
                            key={user.id} 
                            id={index}                            
                            row={parseInt(user.id)} 
                            onMouseEnter={(e)=>handleMouseEnter(e)}
                            onMouseLeave={(e)=>handleMouseLeave(e)}
                            >
                            <Cell
                                style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                    <FormControlLabel 
                                    disabled 
                                    control={<Checkbox name="checkedD" />}
                                />
                            </Cell>
                            <Cell 
                            style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                {user.name}
                            </Cell>
                            <Cell style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                {user.email}
                            </Cell>
                            <Cell style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                            </Cell>
                            <Cell style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                {new Date(user.updatedAt).toLocaleDateString('pt-BR')}
                            </Cell>
                            <Cell style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                {user.rules}
                            </Cell>
                            <CellStatus style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                {user.status?'ATIVO':'INATIVOS'}
                            </CellStatus>
                            <CellIcon >
                                {(icon.showIcons && (icon.indexRow === index)) && 
                                    <IconWrapper>
                                        <IconButton
                                        style={{background:'#fff'}}
                                        variant="contained"
                                        ><Delete />
                                        </IconButton>  

                                        <IconButton
                                        style={{background:'#fff'}}
                                        variant="contained"
                                        ><Archive />
                                        </IconButton> 

                                        <IconButton
                                        style={{background:'#fff'}}
                                        variant="contained"
                                        ><Security />
                                        </IconButton> 

                                        <IconButton
                                        style={{background:'#fff'}}
                                        variant="contained"
                                        ><Create />
                                        </IconButton>                                       
                                    </IconWrapper>  
                                }
                            </CellIcon>                           
                            <Cell style={(icon.showIcons && (icon.indexRow === index))? rowChange :null}>
                                <MoreHoriz />
                            </Cell>
                    </Row>
                    ))}                    
                </TableBody>
            </Table>
        </TableWrapper>
    );
}