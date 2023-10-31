import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import {PostDetails} from "./PostDetails";

export const PostContainer = ({postId}) => {
    const [selectedPost, setSelectedPost] = useState({})

    useEffect(() => {
        postService.getPostById(postId).then(({data}) => setSelectedPost(data))
    }, [])

    return (
        <div>
            <PostDetails post={selectedPost}/>
        </div>
    );
};