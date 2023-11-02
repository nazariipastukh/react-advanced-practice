import {useLocation} from "react-router-dom";

import {CharactersComponent} from "../components";

export const CharactersPage = () => {
    const {state: ids} = useLocation()

    return (
        <div>
            <CharactersComponent ids={ids}/>
        </div>
    );
};