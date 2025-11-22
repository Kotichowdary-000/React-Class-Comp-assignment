import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StatusMessage from '../Components/StatusMessage';
import ContactUs from '../Components/ContactUs';
import ToDoList from '../Components/ToDoList';
import ColorChange from '../Components/ColorChange';
import ThemeProvider from '../Components/ThemeProvider';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<h3>Home Page</h3>} />  
            <Route path="/statusmsg" element={<StatusMessage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/colorchange" element={<ColorChange />} />
            {/* <Route path="/customhook" element={<useFetch />} /> */}
            <Route path="/themechange" element={<ThemeProvider/>} />

        </Routes>
    );
};

export default Routers;
