import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { usePeopleCount, usePeoplePaginated } from '../data/people';
import { Person } from '../app.types';

const Grid = React.memo((): React.ReactElement => {
  const [page, setPage] = React.useState(0);
  const [mydata, setMydata] = React.useState<rowData[]>([]);

  const { data, isLoading } = usePeoplePaginated(page + 1);
  const { data: count } = usePeopleCount();

  type rowData = Person & {
    id: number;
  };

  React.useEffect(() => {
    if (data) {
      setMydata(
        data.map((person, i) => {
          return {
            ...person,
            id: i + 1,
          };
        })
      );
    }
  }, [data]);

  const rows: GridRowsProp = React.useMemo(() => mydata ?? [], [mydata]);

  // All rows must have an ID. If not included as part of the row data, it can also be specified using getRowId prop on DataGrid
  // const rows: GridRowsProp = React.useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       col1: 'Hello',
  //       col2: 'World',
  //     },
  //     {
  //       id: 2,
  //       col1: 'react-table',
  //       col2: 'rocks',
  //     },
  //     {
  //       id: 3,
  //       col1: 'whatever',
  //       col2: 'you want',
  //     },
  //   ],
  //   []
  // );

  const columns: GridColDef[] = React.useMemo(
    () => [
      {
        headerName: 'Name',
        field: 'name', // name is the "key" in the data
        flex: 1,
      },
      {
        headerName: 'Height',
        field: 'height',
      },
      {
        headerName: 'Mass',
        field: 'mass',
      },
      {
        headerName: 'Hair Color',
        field: 'hair_color',
      },
      {
        headerName: 'Skin Color',
        field: 'skin_color',
      },
      {
        headerName: 'Eye Color',
        field: 'eye_color',
      },
      {
        headerName: 'Birth Year',
        field: 'birth_year',
      },
      {
        headerName: 'Gender',
        field: 'gender',
      },
      {
        headerName: 'Created',
        field: 'created',
        flex: 1,
      },
      {
        headerName: 'Edited',
        field: 'edited',
        flex: 1,
      },
    ],
    []
  );

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        autoHeight
        checkboxSelection
        density="comfortable"
        loading={isLoading}
        onPageChange={(page) => setPage(page)}
        paginationMode="server"
        rowCount={count}
        pageSize={10}
      />
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;
