import {Post} from "../post";
import {useEffect, useState} from "react";
import {postsService} from "../../services";

import styles from './Posts.module.css'
import {SelectedPost} from "../selectedPost";

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null)

    const handleSelect = (postId) => {
        postId === null ?
            setSelectedPost(null) :
            postsService.getById(postId).then(({data}) => setSelectedPost(data))
    }

    useEffect(() => {
        postsService.getPosts().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {
                selectedPost && <SelectedPost selectedPost={selectedPost} handleSelect={handleSelect}/>
            }
            <div className={styles.wrapper}>
                {
                    posts.map(post => <Post post={post} key={post.id} handleSelect={handleSelect}/>)
                }
            </div>
        </div>
    );
};