import {createBrowserRouter} from 'react-router-dom'

import {AlbumsPage, CommentsPage, MainPage, TodosPage} from "../pages";
import {MainLayout} from "../layouts";
import {PostById} from "../components";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: '/todos',
                element: <TodosPage/>
            },
            {
                path: '/albums',
                element: <AlbumsPage/>
            },
            {
                path: '/comments',
                element: <CommentsPage/>,
                children: [
                    {
                        path: 'post/:postId',
                        element: <PostById/>
                    }
                ]
            },
        ]
    }
])

export {
    router
}