import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {rmService} from "../../services";
import {Character} from "./Character";
import styles from './Characters.module.css'

export const CharactersComponent = ({ids}) => {
    const [characters, setCharacters] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        rmService.getCharacters(ids).then(({data}) => setCharacters(data))
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}> Back</button>
            <div className={styles.charactersWrapper}>
                {
                    characters.map(character => <Character character={character} key={character.id}/>)
                }
            </div>
        </div>
    );
};