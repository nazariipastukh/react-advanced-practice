import styles from '../../styles/Card.module.css'

export const Car = ({car, setCarForUpdate, deleteCar}) => {
    const {id, brand, price, year} = car

    return (
        <div className={styles.card}>
            <h4>id: {id}</h4>
            <h2>{brand}, {year}</h2>
            <h3>{price} USD</h3>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};