import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js'
import { useParams } from 'react-router-dom';
import { privateKey, publicKey } from '../config/keys';

// const publicKey = '';
// const privateKey = '';

const CharacterDetail = () => {
    const { characterId } = useParams();
    const [characterDetails, setCharacterDetails] = useState(null);
    // const finalCharacterId = characterId ? characterId : '1017100';
    const finalCharacterId = characterId || '1017100';
    useEffect(() => {
        console.log('Character ID:', characterId);  // Log to see if it updates
        console.log('Final Character ID:', finalCharacterId);  // Log the final ID
    }, [characterId]);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            const ts = '1';
            const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
            const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${finalCharacterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
            setCharacterDetails(response.data.data.results[0]);
        };
        fetchCharacterDetails();
    }, [finalCharacterId]);

    if (!characterDetails) return <div>Loading...</div>;

    return (
        <div> 
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
