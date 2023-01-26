import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

const CustomTable = ({tableStyle, columnHeadingsList, tableRowsList, columnWidth, maxHeight, ...props}) => {
    
    const fixedColumnStyle = (isStickyColumn, columnNumber) => {
      const columnWidthValue = 80;
      const leftValue = columnNumber * columnWidthValue;
      if(isStickyColumn) return {position: 'sticky', left: leftValue, zIndex: 100, background: "#fff"} 
      else return {}
    }

    return (
        <TableContainer component={Paper} {...props} style={{ maxHeight: maxHeight }}>
        <Table className={tableStyle ? tableStyle : ""} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {columnHeadingsList.map((columnHeading, index) => {
                return (
                  <TableCell key={columnHeading.id} style={{ 
                    width: columnWidth ? columnWidth[index] : 100, 
                    textAlign: ((columnHeadingsList.length - 1) === index) ? 'right' : 'left',
                    ...fixedColumnStyle(columnHeading.stickyColumn, index) }}>
                    {columnHeading.value}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowsList.map(tableRow => {
              return (
                <TableRow key={tableRow.id}>
                  {tableRow.tableCellsList.map((tableCell, index) => {
                    return (
                      <TableCell component="th" scope="row" key={tableCell.value} 
                        style={{
                          width: columnWidth ? columnWidth[index] : 100,
                          textAlign: ((tableRow.tableCellsList.length - 1) === index) ? 'right' : 'left', 
                          ...fixedColumnStyle(tableCell.stickyColumn, index) 
                        }
                      }>
                        {tableCell.value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
            
        </TableBody>
        </Table>
      </TableContainer>
    )
}

export default CustomTable
