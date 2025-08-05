import { configureStore } from '@reduxjs/toolkit'
import detailsProductReducer from './slices/details-product-slice';

export const store = configureStore({
    reducer: {
        detailsProduct: detailsProductReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;