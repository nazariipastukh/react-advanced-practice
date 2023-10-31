import {useParams} from "react-router-dom";
import {PostContainer} from "../components/Posts/PostContainer";
import {CommentsContainer} from "../components/comments/CommentsContainer";

export const PostDetailsPage = () => {
    const {postId} = useParams()

    return (
        <div>
            <PostContainer postId={postId}/>
            <CommentsContainer postId={postId} />
        </div>
    );
};