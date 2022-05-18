import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const Grid = React.memo((): React.ReactElement => {
  // All rows must have an ID. If not included as part of the row data, it can also be specified using getRowId prop on DataGrid
  const rows: GridRowsProp = React.useMemo(
    () => [
      {
        id: 1,
        col1: 'Hello',
        col2: 'World',
      },
      {
        id: 2,
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        id: 3,
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const columns: GridColDef[] = React.useMemo(
    () => [
      {
        field: 'col1', // the "key" in the data
        headerName: 'Column 1',
      },
      {
        field: 'col2',
        headerName: 'Column 2',
      },
    ],
    []
  );

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;
