import {useEffect, useState} from "react";

import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

export const CommentsContainer = ({postId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getComments(postId).then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};