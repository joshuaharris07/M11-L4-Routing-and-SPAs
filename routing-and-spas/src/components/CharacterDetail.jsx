import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js'
import { privateKey, publicKey } from '../config/keys';

// const publicKey = '';
// const privateKey = '';

const CharacterDetail = ({ characterId }) => {
    const [characterDetails, setCharacterDetails] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            
            const ts = '1';
            const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
            const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
            setCharacterDetails(response.data.data.results[0]);
        };
        fetchCharacterDetails();
    }, [characterId]);

    if (!characterDetails) return <div>Loading...</div>;

    return (
        <div className="character-detail">
            <h2>{characterDetails.name}</h2>
            <p>{characterDetails.description || 'Description not available.'}</p>
            <h3>Comics</h3>
            <ul>
                {characterDetails.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
