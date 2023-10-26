import {Outlet} from "react-router-dom";

import {CommentsComponent} from "../components";

export const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
};