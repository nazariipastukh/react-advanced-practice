export const PostDetails = ({post}) => {
    const {userId, title, body} = post

    return (
        <div>
            <i>User: {userId}</i>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};