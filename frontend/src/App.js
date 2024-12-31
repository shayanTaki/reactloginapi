import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'; // کامپوننت داشبورد (مثال)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* مسیر داشبورد */}
                <Route path="/" element={<Login />} /> {/* مسیر پیش فرض */}
            </Routes>
        </Router>
    );
}

export default App;