import React from 'react';
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables';
import { usePeopleCount, usePeoplePaginated } from '../data/people';

const DataTable = React.memo((): React.ReactElement => {
  const [page, setPage] = React.useState(0);

  // MUIDataTable page starts at 0. Ensure component state reflects that while requesting a separate page from the query
  const { data } = usePeoplePaginated(page + 1);
  const { data: count } = usePeopleCount();

  const columns: MUIDataTableColumnDef[] = React.useMemo(
    () => [
      {
        label: 'Name',
        name: 'name', // name is the "key" in the data
      },
      {
        label: 'Height',
        name: 'height',
      },
      {
        label: 'Mass',
        name: 'mass',
      },
      {
        label: 'Hair Color',
        name: 'hair_color',
      },
      {
        label: 'Skin Color',
        name: 'skin_color',
      },
      {
        label: 'Eye Color',
        name: 'eye_color',
      },
      {
        label: 'Birth Year',
        name: 'birth_year',
      },
      {
        label: 'Gender',
        name: 'gender',
      },
      {
        label: 'Created',
        name: 'created',
      },
      {
        label: 'Edited',
        name: 'edited',
      },
    ],
    []
  );

  React.useEffect(() => {
    console.log('Current page is ' + page);
  }, [page]);

  React.useEffect(() => {
    console.log('data is ' + JSON.stringify(data?.at(0)?.name));
  }, [data]);

  return (
    <div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <MUIDataTable
          title={'Data Table'}
          data={data}
          columns={columns}
          options={{
            page: page,
            serverSide: true,
            onChangePage: (page) => setPage(page),
            count: count,
            rowsPerPageOptions: [10],
          }}
        />
      )}
    </div>
  );
});

DataTable.displayName = 'DataTable';

export default DataTable;
