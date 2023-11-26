import * as React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: 'rgb(247, 217, 48)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function AppTable(props) {
  return (
    <TableContainer component={Paper} className='tbl-container'>
      <Table sx={{ minWidth: 330 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
          {props.column.map((row) => (
            <StyledTableCell style={{ width: row.width,padding: '16px 5px 16px 2px' }}>{row.name}</StyledTableCell>
          ))}
            {/* <StyledTableCell style={{ width: 80,padding: '16px 5px 16px 2px' }}>Item</StyledTableCell>
            <StyledTableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">Ws(gm)</StyledTableCell>
            <StyledTableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">Mc(₹)</StyledTableCell>
            <StyledTableCell style={{ width: 100,padding: '16px 5px 16px 2px' }} align="right">Amount (₹)</StyledTableCell>             */}
          </StyledTableRow>
        </TableHead>
        <TableBody>

          {props.dataSource.map((row) => {
                if(row.tab === 'Gold'){
                  return (
                          <StyledTableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>             
                              <StyledTableCell style={{ width: 80,padding: '16px 5px 16px 2px' }}>{row.name}</StyledTableCell>
                              <StyledTableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">{row.ws}</StyledTableCell>
                              <StyledTableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">{row.mc}</StyledTableCell>
                              <StyledTableCell style={{ width: 100,padding: '16px 5px 16px 2px' }} align="center">{row.min} - {row.max}</StyledTableCell>              
                          </StyledTableRow>
                  )
                }else if(row.tab === 'Silver'){
                  return (   <StyledTableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>             
                              <StyledTableCell style={{ width: 120,padding: '16px 5px 16px 2px' }}>{row.name}</StyledTableCell>
                              <StyledTableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">{row.perGram}</StyledTableCell>
                              <StyledTableCell style={{ width: 100,padding: '16px 5px 16px 2px' }} align="center">{row.min} - {row.max}</StyledTableCell>              
                        </StyledTableRow>)
                }else if(row.tab === 'Exchange'){
                  return (   <StyledTableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>             
                            <StyledTableCell style={{ width: 100,padding: '16px 5px 16px 2px' }}>{row.name}</StyledTableCell>      
                            <StyledTableCell style={{ width: 100,padding: '16px 5px 16px 2px' }}>noWrap</StyledTableCell>           
                            <StyledTableCell style={{ width: 100,padding: '16px 5px 16px 2px' }} align="center">{row.min} - {row.max}</StyledTableCell>              
                      </StyledTableRow>)
                }            
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}