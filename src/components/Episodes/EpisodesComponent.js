import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {rmService} from "../../services";
import {Episode} from "./Episode";
import styles from './Episodes.module.css'

export const EpisodesComponent = () => {
    const [episodes, setEpisodes] = useState([])
    const [prevNextPage, setPrevNextPage] = useState({prev: null, next: null})
    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        rmService.getEpisodes(query.get('page')).then(({data}) => {
            setEpisodes(data.results)
            setPrevNextPage({prev: data.info.prev, next: data.info.next})
        })
    }, [query])

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }

    return (
        <div className={styles.episodesWrapper}>
            {
                episodes.map(episode => <Episode episode={episode} key={episode.id}/>)
            }
            <div className={styles.buttons}>
                <button disabled={!prevNextPage.prev} onClick={prev}>Previous</button>
                <button disabled={!prevNextPage.next} onClick={next}>Next</button>
            </div>
        </div>
    );
};