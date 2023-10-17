import {rickAndMorty} from "../../assets";
import {RickComponent} from "./RickComponent";

import styles from "../../styles/Page.module.css";

export const Rick = () => {
    return (
        <div>
            <h2>Rick And Morty</h2>
            <div className={styles.wrapper}>
                {
                    rickAndMorty.map(character => <RickComponent character={character} key={rickAndMorty.id}/>)
                }
            </div>
        </div>
    );
};