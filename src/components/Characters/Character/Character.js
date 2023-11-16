import styles from './Character.module.css'

export const Character = ({character}) => {
    const {id, name, image} = character

    return (
        <div className={styles.character}>
            <img src={image} alt={name}/>
            <p>id: {id}</p>
            <p>name: {name}</p>
        </div>
    );
};