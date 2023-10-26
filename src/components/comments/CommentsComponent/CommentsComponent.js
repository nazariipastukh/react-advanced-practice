import {useEffect, useState} from "react";

import {commentsService} from "../../../services";
import {Comment} from "../Comment";
import styles from '../../../styles/Wrapper.module.css'

export const CommentsComponent = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getComments().then(({data}) => setComments(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};