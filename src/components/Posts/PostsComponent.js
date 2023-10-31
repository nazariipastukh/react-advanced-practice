import {useLoaderData} from "react-router-dom";

import {PostPreview} from "./PostPreview";

export const PostsComponent = () => {
    const {data} = useLoaderData()

    return (
        <div>
            {
                data.map(post => <PostPreview post={post} key={post.id}/>)
            }
        </div>
    );
};