import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../store";
import {Car} from "../Car";
import styles from './CarsComponent.module.css'

export const CarsComponent = () => {
    const dispatch = useDispatch()
    const {cars, trigger} = useSelector(state => state.cars)

    useEffect(() => {
        carService.getCars().then(data => dispatch(carActions.setCars(data)))
    }, [dispatch, trigger])

    return (
        <section className={styles.wrapper}>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </section>
    );
};