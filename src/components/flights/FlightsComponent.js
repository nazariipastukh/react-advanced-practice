import {FlightCard} from "../flight";
import {useEffect, useState} from "react";
import {flightsService} from "../../services";

export const FlightsComponent = () => {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        flightsService.getFlight().then(({data}) => {
            setFlights(data.filter(flight => flight.launch_year !== '2020'))
        })
    }, [])

    return (
        <div>
            {
                flights.map(flight => <FlightCard flight={flight} key={flight.flight_number}/>)
            }
        </div>
    );
};