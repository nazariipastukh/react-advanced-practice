import {Component} from "react";

import styles from '../../styles/Card.module.css'

class Post extends Component {
    render() {
        const {userId, id, title, body} = this.props.post

        return (
            <div className={styles.card}>
                <p>{`User: ${userId} Post: ${id}`}</p>
                <p>{title}</p>
                <p>{body}</p>
            </div>
        )
    }
}

export {
    Post
}