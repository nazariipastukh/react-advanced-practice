import {UsersComponent} from "../components";
import styles from "../styles/Page.module.css";

export const UsersPage = () => {
    return (
        <div className={styles.page}>
            <UsersComponent/>
        </div>
    );
};