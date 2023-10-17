import {SimpsonComponent} from "./SimpsonComponent";
import {simpsons} from "../../assets";

import styles from '../../styles/Page.module.css'

export const Simpsons = () => {
    return (
        <div>
            <h2>Simpsons</h2>
            <div className={styles.wrapper}>
                {
                    simpsons.map(simpson => <SimpsonComponent simpson={simpson} key={simpson.id}/>)
                }
            </div>
        </div>
    );
};