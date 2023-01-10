import React, {FC} from 'react';

import './App.css';

import { GlobalStoreProvider } from './redux-toolkit/store';
import { Button } from './components/Button';

function App () {
  return (
    <GlobalStoreProvider>
      <Button></Button>
    </GlobalStoreProvider>
  );
}

export default App;
