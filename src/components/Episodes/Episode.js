import {useNavigate} from "react-router-dom";
import styles from './Episode.module.css'

export const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode

    const navigate = useNavigate()

    const ids = characters.map(link => link.split('/').slice(-1)[0])

    return (
        <div onClick={() => navigate(`/episodes/${id}/characters`, {state: ids})} className={styles.episode}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>chapter: {chapter}</p>
        </div>
    );
};