import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {rmService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    isLoading: false,
    errors: null
}

const getEpisodes = createAsyncThunk(
    'episodesSlice/getEpisodes',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await rmService.getEpisodes(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getEpisodes.fulfilled, (state, action) => {
            const {results, info: {prev, next}} = action.payload
            state.episodes = results
            state.prevPage = prev
            state.nextPage = next
            state.isLoading = false
        })
        .addCase(getEpisodes.pending, state => {
            state.isLoading = true
        })
        .addCase(getEpisodes.rejected, (state, action) => {
            state.errors = action.payload
            state.isLoading = false
        })
})

const {reducer: episodesReducer, actions} = episodesSlice

const episodesActions = {
    ...actions,
    getEpisodes
}

export {
    episodesReducer,
    episodesActions
}