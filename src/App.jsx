import React from 'react'
import './App.css'
import StatusMessage from './assets/Components/StatusMessage'

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Conditional Styling Based on Props</h2>

      <StatusMessage status="success" />
      <StatusMessage status="error" />
      <StatusMessage status="warning" />
      <StatusMessage status="anythingElse" />
    </div>
  );
}

export default App;
