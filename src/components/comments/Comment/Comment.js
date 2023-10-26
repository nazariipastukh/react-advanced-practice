import {useNavigate} from "react-router-dom";

import styles from '../../../styles/Card.module.css'

export const Comment = ({comment}) => {
    const {name, email, body, postId} = comment

    const navigate = useNavigate()

    return (
        <div className={styles.card} style={{width: '14.1vw'}}>
            <h3>{name}</h3>
            <p style={{fontSize: '14px'}}>{email}</p>
            <p>{body}</p>

            <button className={styles.bottom} onClick={() => navigate(`post/${postId}`, {state: postId})}>
                See Post
            </button>
        </div>
    );
};