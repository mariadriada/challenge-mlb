import React from 'react';

import { GlobalStoreProvider } from './redux-toolkit/store';
import { SearchBar } from './components/SearchBar';
import {CustomRouterProvider} from "./router"

import "./general-styles/global.scss"

function App () {
  return (
    <div>
    <GlobalStoreProvider>
      <SearchBar/>
      <CustomRouterProvider/>
    </GlobalStoreProvider>
    </div>
  );
}

export default App;
