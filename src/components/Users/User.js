import {useNavigate} from "react-router-dom";

export const User = ({user}) => {
    const {name, id} = user

    const navigate = useNavigate()

    return (
        <div>
            {id} - {name}
            <button onClick={() => navigate(`/users/${id}`, {state: user})}> Details</button>
        </div>
    );
};