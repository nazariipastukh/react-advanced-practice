import {useSelector} from "react-redux";

import styles from './Header.module.css'

export const Header = () => {
    const {episodeName} = useSelector(state => state.characters)

    return (
        <div className={styles.header}>
            {
                episodeName ? episodeName : 'Rick And Morty'
            }
        </div>
    );
};