import {Component} from "react";

import styles from '../../styles/Card.module.css'

class Comment extends Component {
    render() {
        const { postId,name, body, id} = this.props.comment

        return (
            <div className={styles.card}>
                <p>{`Post: ${postId} User: ${id}`}</p>
                <p>{name}</p>
                <p>{body}</p>
            </div>
        )
    }
}

export {
    Comment
}