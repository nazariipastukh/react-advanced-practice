import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {User} from "./User";
import {UsersForm} from "./UsersForm";
import styles from '../../styles/Wrapper.module.css'

export const UsersComponent = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getUsers().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <UsersForm setUsers={setUsers}/>

            <div className={styles.wrapper}>
                {
                    users.reverse().map(user => <User user={user} key={user.id}/>)
                }
            </div>
        </div>
    );
};