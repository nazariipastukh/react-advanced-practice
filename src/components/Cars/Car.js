import {Component} from "react";

import styles from '../../styles/Card.module.css'

class Car extends Component {
    render() {
        const {id, price, year, brand} = this.props.car

        return (
            <div className={styles.card}>
                <p>{id}</p>
                <p>{brand}</p>
                <p>{year}</p>
                <p>{price}</p>
            </div>
        )
    }
}

export {
    Car
}