import React from 'react';

import { GlobalStoreProvider } from './redux-toolkit/store';
import {CustomRouterProvider} from "./router"

import "./general-styles/global.scss"

function App () {
  return (
    <div>
    <GlobalStoreProvider>
      <CustomRouterProvider/>
    </GlobalStoreProvider>
    </div>
  );
}

export default App;
