import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodesActions} from "../../../redux";
import {Episode} from "../Episode";
import styles from './EpisodesComponent.module.css'

export const EpisodesComponent = () => {
    const dispatch = useDispatch()
    const {episodes, prevPage, nextPage} = useSelector(state => state.episodes)
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(episodesActions.getEpisodes({page}))
    }, [dispatch, page])

    const handlePrev = () => {
        setQuery(prevState => {
            prevState.set('page', `${+prevState.get('page') - 1}`)
            return prevState
        })
    }

    const handleNext = () => {
        setQuery(prevState => {
            prevState.set('page', `${+prevState.get('page') + 1}`)
            return prevState
        })
    }

    return (
        <div className={styles.episodesWrapper}>
            {
                episodes.map(episode => <Episode episode={episode} key={episode.id}/>)
            }
            <div className={styles.buttons}>
                <button disabled={!prevPage} onClick={handlePrev}>Previous</button>
                <button disabled={!nextPage} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};