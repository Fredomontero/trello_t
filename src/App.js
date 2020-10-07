import React from 'react';
import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard.page';
import { Login } from './pages/Login/Login.page';

function App() {
  return (
    <div id="app-container">
      <h1>This is gonna be the App title</h1>
      <Login/>
    </div>
  );
}

export default App;
