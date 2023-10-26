import {NavLink} from "react-router-dom";

import styles from '../../styles/Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={'/todos'}> Todos </NavLink>
            <NavLink to={'/albums'}> Albums </NavLink>
            <NavLink to={'/comments'}> Comments </NavLink>
        </div>
    );
};