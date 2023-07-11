import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    modalIsOpen,
    searchText,
    searchResults,


}

export const commonSlice = createSlice({

    name: 'navbar',
    initialState,
    reducers: {


    },
})

export const { } = commonSlice.actions

export default commonSlice.reducer