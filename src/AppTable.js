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
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">WS</TableCell>
            <TableCell align="right">MC</TableCell>
            <TableCell align="right">Amount</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataSource.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ws}</TableCell>
              <TableCell align="right">{row.mc}</TableCell>
              <TableCell align="right">{row.min} - {row.max}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}