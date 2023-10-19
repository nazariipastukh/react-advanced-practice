import {FlightCard} from "../flight";
import {useEffect, useState} from "react";
import {flightsService} from "../../services";

import styles from './FlightsComponent.module.css'

export const FlightsComponent = () => {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        flightsService.getFlight().then(({data}) => {
            setFlights(data.filter(flight => flight.launch_year !== '2020'))
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            {
                flights.map(flight => <FlightCard flight={flight} key={flight.flight_number}/>)
            }
        </div>
    );
};