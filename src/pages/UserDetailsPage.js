import {UserDetails} from "../components/Users/UserDetails";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const UserDetailsPage = () => {
    const [selectedUser, setSelectedUser] = useState(null)
    const {state: user} = useLocation()

    useEffect(() => {
        setSelectedUser(user)
    }, [])

    return (
        <div>
            {
                selectedUser && (
                    <div>
                        <UserDetails user={selectedUser}/>
                        <Outlet/>
                    </div>
                )
            }
        </div>
    );
};