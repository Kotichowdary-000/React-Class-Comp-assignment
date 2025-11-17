import React, { Fragment } from 'react'
import './App.css'
import StatusMessage from './assets/Components/StatusMessage'
import ContactUs from './assets/Components/ContactUs';
import ToDoList from './assets/Components/ToDoList';
import ColorChange from './assets/Components/ColorChange';
import Routers from './routes/Routers';
import Navbar from './assets/Components/Navbar';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Routers />
    </Fragment>
  );
}

export default App;   
