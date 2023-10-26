import styles from '../../styles/Card.module.css'

export const Post = ({post}) => {
    const {title, body} = post

    return (
        <div className={styles.card} style={{width: '30.5vw'}}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};