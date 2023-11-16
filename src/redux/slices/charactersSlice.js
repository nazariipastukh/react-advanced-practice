import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {rmService} from "../../services";

const initialState = {
    characters: [],
    isLoading: false,
    errors: null,
    episodeName: null
}

const getCharacters = createAsyncThunk(
    'charactersSlice/getCharacters',
    async ({ids}, thunkApi) => {
        try {
            const {data} = await rmService.getCharacters(ids)
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        setEpisodeName: (state, action) => {
            state.episodeName = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getCharacters.fulfilled, (state, action) => {
            state.characters = action.payload
            state.isLoading = false
        })
        .addCase(getCharacters.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCharacters.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload
        })
})

const {reducer: charactersReducer, actions} = charactersSlice

const charactersActions = {
    ...actions,
    getCharacters
}

export {
    charactersActions,
    charactersReducer
}