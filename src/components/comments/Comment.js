export const Comment = ({comment}) => {
    const {name, email, body} = comment

    return (
        <div>
            <h3>{name}</h3>
            <i>{email}</i>
            <p>{body}</p>
        </div>
    );
};