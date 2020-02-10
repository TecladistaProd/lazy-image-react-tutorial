import React from 'react';
import './App.css';

import LazyImage from './components/LazyImage'

function App() {
  return (
    <div className="App">
      <h1 className="title">Lazy Image</h1>
      <div className="images">
        {
          [0,1,2,3,4,5,6].map(i => (
            <LazyImage
              key={i}
              src='http://lorempixel.com/400/400'
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
