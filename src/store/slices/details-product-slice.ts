import { createSlice } from '@reduxjs/toolkit';

export const DetailsProductSlice = createSlice({
    name: 'detailsProduct',
    initialState:{
        details: {}
    },
    reducers: {
        setDetailsProduct: (state, action) => {
            state.details = action.payload
        }
    }
})

export const {setDetailsProduct} = DetailsProductSlice.actions
export default DetailsProductSlice.reducer