import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterDetail from './CharacterDetail';
import CryptoJS from 'crypto-js';
import { privateKey, publicKey } from '../config/keys';

// const publicKey = '';
// const privateKey = '';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ts = '1';
                const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='container m-3'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {characters.map((character) => (
                    <div
                        key={character.id}
                        className="card"
                        onClick={() => setSelectedCharacterId(character.id)}
                    >
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            className='card-img-top'
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{character.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
            {selectedCharacterId && <CharacterDetail characterId={selectedCharacterId} />}
        </div>
    );
};

export default CharacterList;

