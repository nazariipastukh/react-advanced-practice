import {Component} from "react";

import {carService} from "../../services";
import {Car} from "./Car";
import styles from '../../styles/Wrapper.module.css'

class CarsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        carService.getAll().then(({data}) => this.setState({cars: data}))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {
                    this.state.cars.map(car => <Car car={car} key={car.id}/>)
                }
            </div>
        )
    }
}

export {
    CarsComponent
}