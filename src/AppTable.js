import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function AppTable(props) {
  return (
    <TableContainer component={Paper} className='tbl-container'>
      <Table sx={{ minWidth: 330 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 110,padding: '16px 5px 16px 2px' }}>Item</TableCell>
            <TableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">WS&nbsp;(gm)</TableCell>
            <TableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">MC (₹)</TableCell>
            <TableCell style={{ width: 60,padding: '16px 5px 16px 2px' }} align="right">Amount (₹)</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataSource.map((row) => (
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ width: 110,padding: '16px 5px 16px 2px' }}>
                {row.name}
              </TableCell>
              <TableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">{row.ws}</TableCell>
              <TableCell style={{ width: 30,padding: '16px 5px 16px 2px' }} align="right">{row.mc}</TableCell>
              <TableCell style={{ width: 60,padding: '16px 5px 16px 2px' }} align="right">{row.min} - {row.max}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}