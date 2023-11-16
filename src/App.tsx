import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Homepage from './pages/homepage';
import Fav from './pages/favorite';
import CharityCause from './pages/charityCause';
import CharityDetail from './pages/charityDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Homepage />
        <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/favorites" element={<Fav/>}/>
        <Route path="/search/:causes" element={<CharityCause/>}/>
        <Route path="/charity/:id" element={<CharityDetail/>}/>
      </Route>  
      </Routes>
      </div>
    </Router>
  );
};

export default App;
