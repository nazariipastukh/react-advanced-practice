import styles from '../../styles/Container.module.css'

export const SimpsonComponent = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson

    return (
        <div className={styles.container}>
            <img src={photo} alt={name}/>
            <h3>{name} {surname}</h3>
            <h4>Age: {age}</h4>
            <p>{info}</p>
        </div>
    );
};