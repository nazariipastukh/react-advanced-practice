import {Component} from "react";

import styles from '../../styles/Card.module.css'

class User extends Component {
    render() {
        const {name, username, id} = this.props.user

        return (
            <div className={styles.card}>
                <p>{id}</p>
                <p>{username}</p>
                <p>{name}</p>
            </div>
        )
    }
}

export {
    User
}