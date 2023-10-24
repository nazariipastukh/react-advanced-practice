import {CommentsComponent} from "../components";
import styles from '../styles/Page.module.css'

export const CommentsPage = () => {
    return (
        <div className={styles.page}>
            <CommentsComponent/>
        </div>
    );
};