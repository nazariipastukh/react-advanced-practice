import styles from '../../../styles/Card.module.css'

export const Todo = ({todo}) => {
    const {title, completed} = todo

    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <i className={styles.bottom}>{completed === false ? '✖' : '✔'}</i>
        </div>
    );
};