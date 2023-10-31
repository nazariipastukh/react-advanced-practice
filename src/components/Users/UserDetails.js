import {useNavigate} from "react-router-dom";

export const UserDetails = ({user}) => {
    const {
        name, username, email,
        phone, website, address
    } = user

    const navigate = useNavigate()

    return (
        <div>
            <h3>{name}</h3>
            <h4>{username}</h4>
            <i>{email}</i>
            {address && <p>{address.city}, {address.street}</p>}
            <i>{phone}</i>
            <p>{website}</p>
            <button onClick={() => navigate('posts', {state: user})}>Posts</button>
        </div>
    );
};