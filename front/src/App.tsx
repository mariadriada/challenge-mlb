import React from 'react';

import { GlobalStoreProvider } from './redux-toolkit/store';
import { Button } from './components/Button';
import {CustomRouterProvider} from "./router"

function App () {
  return (
    <GlobalStoreProvider>
      <Button></Button>
      <CustomRouterProvider/>
    </GlobalStoreProvider>
  );
}

export default App;
