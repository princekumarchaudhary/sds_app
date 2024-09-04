import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import SSNPage from './SSNPage';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage setUserData={setUserData} />}
        />
        <Route
          path="/ssn"
          element={<SSNPage userData={userData} setUserData={setUserData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
