import styles from '../../styles/Card.module.css'

export const Comment = ({comment}) => {
    const {name, email, body, postId} = comment

    return (
        <div className={styles.card}>
            <h4>Post: {postId}</h4>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <div>{body}</div>
        </div>
    );
};