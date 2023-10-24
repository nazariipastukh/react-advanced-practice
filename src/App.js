import {CommentsPage, UsersPage} from "./pages";
import styles from './App.module.css'

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <CommentsPage/>
            <UsersPage/>
        </div>
    );
};