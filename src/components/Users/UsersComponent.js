import {User} from "./User";

export const UsersComponent = ({users}) => {
    return (
        <div>
            {
                users.map(user => <User user={user} key={user.id}/>)
            }
        </div>
    );
};