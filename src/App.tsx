import React from 'react';
import Table from './table/table.component';
import * as log from 'loglevel';
import { pluginName } from '.';
import Grid from './table/grid.component';

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
        <p>Basic table</p>
        <Table />
        <p>DataGrid</p>
        <Grid />
      </div>
    );
  }
}

export default App;
