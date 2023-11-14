import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: false,
    carForUpdate: null,
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        setTrigger: (state) => {
            state.trigger = (prev => !prev)
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
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