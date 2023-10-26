import styles from '../../../styles/Card.module.css'

export const Album = ({album}) => {
    const {userId, title} = album

    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <i className={styles.bottom}>User: {userId}</i>
        </div>
    );
};