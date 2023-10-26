import {useEffect, useState} from "react";

import {albumsService} from "../../../services";
import {Album} from "../Album";
import styles from '../../../styles/Wrapper.module.css'

export const AlbumsComponent = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        albumsService.getAlbums().then(({data}) => setAlbums(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};