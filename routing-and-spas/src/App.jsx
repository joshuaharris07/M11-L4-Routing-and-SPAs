import React from 'react';
import CharacterList from './components/CharacterList';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div>
            <h1>Marvel Comics Characters</h1>
            <CharacterList />
        </div>
    );
};

export default App;