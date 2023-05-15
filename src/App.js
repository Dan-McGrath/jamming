import {data} from "./TempData/DATA";
import Header from './components/header/Header';
import React from 'react';

function App() {
  return (
    <div>
      <Header dataObject={data}/>
    </div>
  );
}

export default App;
