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

    const handleAddUser = (user) => {
        setUsers([...users.reverse(), user])
        console.log(user)
    }

    return (
        <div>
            <UsersForm handleAddUser={handleAddUser}/>

            <div className={styles.wrapper}>
                {
                    users.reverse().map(user => <User user={user} key={user.id}/>)
                }
            </div>
        </div>
    );
};