import React from 'react';
import { Column, useTable } from 'react-table';
import { Person } from '../app.types';

interface TableProps {
  data: Person[];
  columns: Column[];
}

const Table = React.memo((props: TableProps): React.ReactElement => {
  const { data, columns } = props;

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => {
            const { key, ...otherHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              // Apply the header row props
              <tr key={key} {...otherHeaderGroupProps}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => {
                    const { key, ...otherHeaderProps } =
                      column.getHeaderProps();
                    return (
                      // Apply the header cell props
                      <th key={key} {...otherHeaderProps}>
                        {
                          // Render the header
                          column.render('Header')
                        }
                      </th>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            const { key, ...otherRowProps } = row.getRowProps();
            return (
              // Apply the row props
              <tr key={key} {...otherRowProps}>
                {
                  // Loop over the row cells
                  row.cells.map((cell) => {
                    const { key, ...otherCellProps } = cell.getCellProps();
                    // Apply the cell props
                    return (
                      <td key={key} {...otherCellProps}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
});

Table.displayName = 'Table';

export default Table;
