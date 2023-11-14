import {useDispatch} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../store";
import styles from './Car.module.css'

export const Car = ({car}) => {
    const {brand, price, year, id} = car

    const dispatch = useDispatch()

    const handleUpdateClick = () => {
        dispatch(carActions.setCarForUpdate({car}));
    };

    const deleteCar = async () => {
        await carService.deleteCar(id)
        dispatch(carActions.setTrigger())
    }

    return (
        <section className={styles.carWrap}>
            <p>{brand}</p>
            <p>{price} USD</p>
            <p>{year} year</p>
            <button onClick={handleUpdateClick}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </section>
    );
};