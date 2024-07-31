import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/Home/HomePage';
import Categories from './components/categories/Categories';
;

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          
        </Routes>
      </Router>
    
     
    </div>
  );
}

export default App;
