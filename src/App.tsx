import React, { useState } from 'react';
import YelpBusinesses from './components/YelpBusinesses';
import './App.css';
import YelpSeach from './components/YelpSeach';

function App() {
  const [searchStr, setSearchStr] = useState('Alpharetta GA');
  function onSearch(val: string) {
    setSearchStr(val);
  }
  return (
    <div className='App'>
      <header>
        <h1>Top 5 Ice Creams!</h1>
      </header>
      <YelpSeach searchStr={searchStr} onSearch={onSearch}></YelpSeach>
      <YelpBusinesses searchStr={searchStr}></YelpBusinesses>
    </div>
  );
}

export default App;
