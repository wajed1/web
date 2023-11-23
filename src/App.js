import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link to handle navigation

import User from './pages/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        </Routes>
    </Router>
  );
}

export default App;
