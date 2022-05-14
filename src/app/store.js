import { configureStore } from '@reduxjs/toolkit'
import { exchangeApi } from '../services/exchangeApi';

export default configureStore({
    reducer: {
        [exchangeApi.reducerPath]: exchangeApi.reducer
    },
});