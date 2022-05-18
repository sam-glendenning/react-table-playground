import React from 'react';
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables';

const DataTable = React.memo((): React.ReactElement => {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const columns: MUIDataTableColumnDef[] = React.useMemo(
    () => [
      {
        label: 'Column 1',
        name: 'col1', // accessor is the "key" in the data
      },
      {
        label: 'Column 2',
        name: 'col2',
      },
    ],
    []
  );

  return (
    <div>
      <MUIDataTable title={'Data Table'} data={data} columns={columns} />
    </div>
  );
});

DataTable.displayName = 'DataTable';

export default DataTable;
