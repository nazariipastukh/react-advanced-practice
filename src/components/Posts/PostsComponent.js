import {Component} from "react";

import {Post} from "./Post";
import {jsonService} from "../../services";
import styles from '../../styles/Wrapper.module.css'

class PostsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        jsonService.getAllPosts().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.posts.map(post => <Post post={post} key={post.id}/>)
                }
            </div>
        )
    }
}

export {
    PostsComponent
}