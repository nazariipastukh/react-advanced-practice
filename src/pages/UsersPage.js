import {UsersComponent} from "../components/Users";
import {useLoaderData} from "react-router-dom";

export const UsersPage = () => {
    const {data} = useLoaderData()

    return (
        <div>
            <UsersComponent users={data}/>
        </div>
    );
};