import React from 'react'
import './App.css'
import StatusMessage from './assets/Components/StatusMessage'
import ContactUs from './assets/Components/ContactUs';
import ToDoList from './assets/Components/ToDoList';
import ColorChange from './assets/Components/ColorChange';

function App() {
  return (
    <div style={{ padding: "30px" }}>
      {/* <h2>Conditional Styling Based on Props</h2>

      <StatusMessage status="success" />
      <StatusMessage status="error" />
      <StatusMessage status="warning" />
      <StatusMessage status="anythingElse" /> */}

      {/* <ToDoList />
      <ContactUs /> */}

      <ColorChange />
    </div>
  );
}

export default App;   
