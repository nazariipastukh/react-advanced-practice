import {Component} from "react";
import {NavLink} from "react-router-dom";

import styles from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <NavLink to={'/cars'}> Cars </NavLink>
                <NavLink to={'/users'}> Users </NavLink>
                <NavLink to={'/posts'}> Posts </NavLink>
            </div>
        )
    }
}

export {
    Header
}