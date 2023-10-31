import {useNavigate} from "react-router-dom";

export const PostPreview = ({post}) => {
    const {id: postId, title} = post

    const navigate = useNavigate()

    return (
        <div>
            <h3>{title}</h3>
            <button onClick={() => navigate(`/post/${postId}`)}> Details</button>
        </div>
    );
};