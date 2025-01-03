import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetail';
import Comics from './components/Comics';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <div className='container'>
            <NavigationBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/browse-characters' element={<BrowseCharacters />} />
              <Route path='/character-details/:characterId' element={<CharacterDetail />} />
              <Route path='/comics' element={<Comics />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;