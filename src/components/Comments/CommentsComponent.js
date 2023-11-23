import {Component} from "react";

import {jsonService} from "../../services";
import {Comment} from "./Comment";
import styles from '../../styles/Wrapper.module.css'

class CommentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        jsonService.getAllComments().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.comments.map(comment => <Comment comment={comment} key={comment.id}/>)
                }
            </div>
        )
    }
}

export {
    CommentsComponent
}