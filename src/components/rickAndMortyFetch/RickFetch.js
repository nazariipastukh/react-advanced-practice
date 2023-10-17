import {useEffect, useState} from "react";
import {RickComponent} from "../rickAndMorty";

import styles from "../../styles/Page.module.css";

export const RickFetch = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(data => data.json())
            .then(data => setCharacters(data.results.slice(0, 6)))
    }, [])

    return (
        <div>
            <h2>Rick And Morty Fetch</h2>
            <div className={styles.wrapper}>
                {
                    characters && characters.map(character => <RickComponent key={character.id} character={character}/>)
                }
            </div>
        </div>
    );
};