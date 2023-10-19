import {Post} from "../post";
import {useEffect, useState} from "react";
import {postsService} from "../../services";

import styles from './Posts.module.css'
import {SelectedPost} from "../selectedPost";

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [selected, setSelected] = useState(null)

    const handleSelect = (postId) => {
        const selectedPost = posts.find(post => post.id === postId)
        setSelected(selectedPost)
    }

    useEffect(() => {
        postsService.getPosts().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {
                selected && <SelectedPost selected={selected} handleSelect={handleSelect}/>
            }
            <div className={styles.wrapper}>
                {
                    posts.map(post => <Post post={post} key={post.id} handleSelect={handleSelect}/>)
                }
            </div>
        </div>
    );
};