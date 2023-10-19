import styles from '../post/Post.module.css'

export const SelectedPost = ({selected, handleSelect}) => {
    const {id, title, body} = selected

    return (
        <div className={styles.card}>
            <h3>PostId: {id}</h3>
            <p>{title}</p>
            <h4>{body}</h4>

            <button onClick={() => handleSelect()}> Hide</button>
        </div>
    );
};