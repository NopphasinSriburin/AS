import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import AddRecordPage from '../pages/AddRecordPage';
import RecordListPage from '../pages/RecordListPage';
import './App.css'; // ต้องมีบรรทัดนี้ในไฟล์ App.tsx


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-record" element={<AddRecordPage />} />
        <Route path="/records" element={<RecordListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
