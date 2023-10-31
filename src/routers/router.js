import {createBrowserRouter, Navigate} from "react-router-dom";

import {UsersPage} from "../pages/UsersPage";
import {MainLayout} from "../layouts/MainLayout";
import {usersService} from "../services/usersService";
import {PostsComponent} from "../components/Posts/PostsComponent";
import {UserDetailsPage} from "../pages/UserDetailsPage";
import {postsOfUserService} from "../services/postsOfUserService";
import {PostDetailsPage} from "../pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/users'}/>
            },
            {
                path: '/users',
                element: <UsersPage/>,
                loader: () => usersService.getUsers()
            },
            {
                path: '/users/:id',
                element: <UserDetailsPage/>,
                children: [
                    {
                        path: 'posts',
                        element: <PostsComponent/>,
                        loader: ({params: {id}}) => postsOfUserService.getPostsOfUser(id)
                    }
                ]
            },
            {
                path: '/post/:postId',
                element: <PostDetailsPage/>
            }
        ]
    }
])

export {
    router
}