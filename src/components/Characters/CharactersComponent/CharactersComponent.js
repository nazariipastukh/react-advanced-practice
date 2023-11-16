import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {charactersActions} from "../../../redux";
import {Character} from "../Character";
import styles from './CharactersComponent.module.css'

export const CharactersComponent = () => {
    const {state: {ids, name}} = useLocation()
    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.characters)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(charactersActions.setEpisodeName(name))
        dispatch(charactersActions.getCharacters({ids}))
    }, [dispatch, ids, name])

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