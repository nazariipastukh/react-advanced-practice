import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "./Comment";
import {CommentsForm} from "./CommentsForm";
import styles from '../../styles/Wrapper.module.css'

export const CommentsComponent = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getComments().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <CommentsForm setComments={setComments}/>

            <div className={styles.wrapper}>
                {
                    comments.reverse().map(comment => <Comment comment={comment} key={comment.id}/>)
                }
            </div>
        </div>
    );
};