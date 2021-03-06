import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import Rows from './Rows';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function CustomizedTables() {

    const [rows, setRows] = React.useState([])
    const [country, setCountry] = React.useState("")


    React.useEffect(() => {
        
        axios.get("http://localhost:3000/data")
        .then(res => setRows(res.data))

    }, [])

    const filterByCountry = (e) => {
        setCountry(e.currentTarget.value)
          axios.get(`http://localhost:3000/data?country=${country}`)
        .then(res => setRows(res.data))
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="center" >
                <select onChange={filterByCountry} >
                    <option value="INDIA">INDIA</option>
                    <option value="AMERICA">AMERICA</option>
                    <option value="CHINA">CHINA</option>
                    <option value="JAPAN">JAPAN</option>

                </select>
            </StyledTableCell>
            <StyledTableCell align="center">CITY</StyledTableCell>
            <StyledTableCell align="center">POPULATION</StyledTableCell>
            <StyledTableCell align="center">EDIT</StyledTableCell>
            <StyledTableCell align="center">DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Rows key={row.id} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
