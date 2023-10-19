import styles from './Post.module.css'

export const Post = ({post, handleSelect}) => {
    const {id, title} = post

    return (
        <div className={styles.card}>
            <h3>PostId: {id}</h3>
            <p>{title}</p>

            <button onClick={() => handleSelect(id)}> Details</button>
        </div>
    );
};