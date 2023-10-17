import styles from "../../styles/Container.module.css";

export const RickComponent = ({character}) => {
    const {name, status, species, gender, image} = character

    return (
        <div className={styles.container}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <h3>{gender}</h3>
            <h4>{status}</h4>
            <p>{species}</p>
        </div>
    );
};