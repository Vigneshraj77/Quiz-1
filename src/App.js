import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './component/Login/Login.jsx'

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
