import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: false,
    carForUpdate: null,
    deleteId: null,
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            const {data} = action.payload
            state.cars = data
        },
        setTrigger: (state) => {
            state.trigger = (prev => !prev)
        },
        setCarForUpdate: (state, action) => {
            const {car} = action.payload || {};
            state.carForUpdate = car;
        },
        setDeleteId: (state, action) => {
            const {car} = action.payload || {}
            state.deleteId = car.id
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice

const carActions = {
    ...actions
}

export {
    carActions,
    carsReducer
}