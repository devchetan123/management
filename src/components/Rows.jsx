import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Rows({ row }) {

  return (
    <StyledTableRow>
      <StyledTableCell align="center">{row.country}</StyledTableCell>
      <StyledTableCell align="center">{row.city}</StyledTableCell>
      <StyledTableCell align="center">{row.population}</StyledTableCell>
      <StyledTableCell align="center">
         <button>EDIT</button>
      </StyledTableCell>
      <StyledTableCell align="center">
          <button>DELETE</button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default Rows;
