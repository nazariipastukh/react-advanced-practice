import styles from './FlightCard.module.css'

export const FlightCard = ({flight}) => {
    const {mission_name, launch_year, links} = flight

    return (
        <div className={styles.card}>
            <img src={links.mission_patch_small} alt={mission_name}/>
            {launch_year} - {mission_name}
        </div>
    );
};