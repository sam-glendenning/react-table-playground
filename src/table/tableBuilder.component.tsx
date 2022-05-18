import React from 'react';
import { Column } from 'react-table';
import { usePeoplePaginated } from '../data/people';
import Table from './table.component';

const TableBuilder = React.memo((): React.ReactElement => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading: loading } = usePeoplePaginated(page);

  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Height',
        accessor: 'height',
      },
      {
        Header: 'Mass',
        accessor: 'mass',
      },
      {
        Header: 'Hair Color',
        accessor: 'hair_color',
      },
      {
        Header: 'Skin Color',
        accessor: 'skin_color',
      },
      {
        Header: 'Eye Color',
        accessor: 'eye_color',
      },
      {
        Header: 'Birth Year',
        accessor: 'birth_year',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Created',
        accessor: 'created',
      },
      {
        Header: 'Edited',
        accessor: 'edited',
      },
    ],
    []
  );

  return (
    <div>
      {loading || !data ? (
        <p>Loading...</p>
      ) : (
        <Table data={data} columns={columns} />
      )}
      <button onClick={() => setPage(page - 1 >= 1 ? page - 1 : 1)}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
});

TableBuilder.displayName = 'TableBuilder';

export default TableBuilder;
