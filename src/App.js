import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './component/Login/Login.js'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Login} />
        </div>
        </BrowserRouter>
  );
}

export default App;
