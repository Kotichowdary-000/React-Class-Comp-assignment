// src/App.js
import React, { Fragment } from "react";
import "./App.css";
// import StatusMessage from "./Components/StatusMessage";
// import ContactUs from "./Components/ContactUs";
// import ToDoList from "./Components/ToDoList";
// import ColorChange from "./Components/ColorChange";
// import Routers from "./routes/Routers";
// import Navbar from "./Components/Navbar";
// import ThemeProvider from "./Components/ThemeProvider";
// import "./Components/light.css";
// import "./Components/dark.css";
import CountWords from "./Components/CountWords";



function App() {
  return (
      <Fragment>
{/* <ThemeProvider>
   <Navbar />
        <Routers />
  </ThemeProvider> */}
  <CountWords />

       
      </Fragment>
  );
}

export default App;
