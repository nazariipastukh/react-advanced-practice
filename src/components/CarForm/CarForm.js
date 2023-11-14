import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carValidator} from "../../validators";
import {carActions} from "../../store";

export const CarForm = () => {
    const {reset, setValue, register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator)
    })
    const dispatch = useDispatch()
    const {carForUpdate} = useSelector(state => state.cars)

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        await carService.createCar(car)
        dispatch(carActions.setTrigger())
        reset()
    }

    const update = async (car) => {
        await carService.updateCar(carForUpdate.id, car)
        dispatch(carActions.setTrigger())
        dispatch(carActions.setCarForUpdate(null))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')} />
            {
                errors.brand && <div style={{color: 'red'}}> {errors.brand.message}</div>
            }
            <input type={'text'} placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {
                errors.year && <div style={{color: 'red'}}> {errors.year.message}</div>
            }
            <input type={'text'} placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {
                errors.price && <div style={{color: 'red'}}> {errors.price.message}</div>
            }
            <button> {carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};