import {Component} from "react";

import {jsonService} from "../../services";
import {User} from "./User";
import styles from '../../styles/Wrapper.module.css'

class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        jsonService.getAllUsers().then(({data}) => this.setState({users: data}))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.users.map(user => <User user={user} key={user.id}/>)
                }
            </div>
        )
    }
}

export {
    UsersComponent
}