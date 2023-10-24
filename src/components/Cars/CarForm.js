import {useEffect} from "react";
import {useForm} from "react-hook-form";

import {carsService} from "../../services";
import styles from '../../styles/Form.module.css'
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from '@hookform/resolvers/joi'

export const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onSubmit",
    })

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
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
                <input type={'text'} placeholder={'brand'} {...register('brand')} />
                {
                    errors.brand && <div style={{color: 'red'}}> {errors.brand.message}</div>
                }
                <input type={'text'} placeholder={'year'} {...register('year', {valueAsNumber: true})} />
                {
                    errors.year && <div style={{color:'red'}}> {errors.year.message}</div>
                }
                <input type={'text'} placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                {
                    errors.price && <div style={{color:'red'}}> {errors.price.message}</div>
                }
                <button>{carForUpdate ? 'Update Car' : 'Save Car'}</button>
            </form>
        </div>
    );
};