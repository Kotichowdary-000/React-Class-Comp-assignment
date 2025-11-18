// src/App.js
import React, { Fragment } from "react";
import "./App.css";
import StatusMessage from "./assets/Components/StatusMessage";
import ContactUs from "./assets/Components/ContactUs";
import ToDoList from "./assets/Components/ToDoList";
import ColorChange from "./assets/Components/ColorChange";
import Routers from "./routes/Routers";
import Navbar from "./assets/Components/Navbar";
// import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (

      <Fragment>
        <Navbar />
        <Routers />
        {/* You can still render other components here if needed */}
        {/* <StatusMessage /> */}
        {/* <ContactUs /> */}
        {/* <ToDoList /> */}
        {/* <ColorChange /> */}
      </Fragment>
  );
}

export default App;
