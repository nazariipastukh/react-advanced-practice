import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {CarsPage, PostsPage, CommentsPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/cars'}/>
            },
            {
                path: '/cars',
                element: <CarsPage/>
            },
            {
                path: '/comments',
                element: <CommentsPage/>
            },
            {
                path: '/posts',
                element: <PostsPage/>
            }
        ]
    }
])

export {
    router
}