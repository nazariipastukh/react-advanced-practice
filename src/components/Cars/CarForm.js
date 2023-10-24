import {useEffect} from "react";
import {useForm} from "react-hook-form";

import {carsService} from "../../services";
import styles from '../../styles/Form.module.css'

export const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, setValue, /*formState: {errors, isValid}*/} = useForm()

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate, setValue])

    const saveCar = async (car) => {
        await carsService.createCar(car)
        setTrigger(prevState => !prevState)
        reset()
    }

    const updateCar = async (car) => {
        await carsService.updateCar(carForUpdate.id, car)
        setTrigger(prevState => !prevState)
        setCarForUpdate(null)
        reset()
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : saveCar)}>
                <input type={'text'} placeholder={'brand'} {...register('brand')}  />
                <input type={'text'} placeholder={'year'} {...register('year')}  />
                <input type={'text'} placeholder={'price'} {...register('price')} />
                <button>{carForUpdate ? 'Update Car' : 'Save Car'}</button>
            </form>
        </div>
    );
};