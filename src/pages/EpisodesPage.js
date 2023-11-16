import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {EpisodesComponent} from "../components/Episodes";
import {charactersActions} from "../redux";

export const EpisodesPage = () => {
    const {isLoading} = useSelector(state => state.episodes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(charactersActions.setEpisodeName(null))
    }, [dispatch])

    return (
        <div>
            {
                isLoading && (
                    <h1>Loading...</h1>
                )
            }
            <EpisodesComponent/>
        </div>
    );
};