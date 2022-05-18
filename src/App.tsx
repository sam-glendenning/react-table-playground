import React from 'react';
import * as log from 'loglevel';
import { pluginName } from '.';
import Grid from './table/grid.component';
import DataTable from './table/datatable.component';
import { QueryClient, QueryClientProvider } from 'react-query';
import TableBuilder from './table/tableBuilder.component';

class App extends React.Component<unknown, { hasError: boolean }> {
  public constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: Error | null): void {
    this.setState({ hasError: true });
    log.error(`${pluginName} failed with error: ${error}`);
  }

  public render(): React.ReactNode {
    // if (this.state.hasError) {
    //   return (
    //     <div className="error">
    //       <p>Error</p>
    //     </div>
    //   );
    // }

    return (
      <div className="React-Table-Playground">
        <QueryClientProvider client={new QueryClient()}>
          <p>Basic table</p>
          <TableBuilder />
          <p>DataGrid</p>
          <Grid />
          <p>DataTable</p>
          <DataTable />
        </QueryClientProvider>
      </div>
    );
  }
}

export default App;
