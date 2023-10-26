import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "./Post";

export const PostById = () => {
    const [post, setPost] = useState([])

    const {state: postId} = useLocation()

    useEffect(() => {
        postService.getPost(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            <Post post={post}/>
        </div>
    );
};