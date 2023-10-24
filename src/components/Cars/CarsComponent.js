import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "./Car";
import styles from '../../styles/Wrapper.module.css'

export const CarsComponent = ({trigger, setCarForUpdate, setTrigger}) => {
    const [cars, setCars] = useState([])

    const deleteCar = async (id) => {
        await carsService.deleteCar(id)
        setTrigger(prevState => !prevState)
    }

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data.reverse()))
    }, [trigger])

    return (
        <div className={styles.wrapper}>
            {
                cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} deleteCar={deleteCar}/>)
            }
        </div>
    );
};