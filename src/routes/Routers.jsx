import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StatusMessage from '../assets/Components/StatusMessage';
import ContactUs from '../assets/Components/ContactUs';
import ToDoList from '../assets/Components/ToDoList';
import ColorChange from '../assets/Components/ColorChange';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<h3>Home Page</h3>} />  {/* FIX */}
            <Route path="/statusmsg" element={<StatusMessage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/colorchange" element={<ColorChange />} />
        </Routes>
    );
};

export default Routers;
