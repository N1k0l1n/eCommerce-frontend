import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { basketSlice } from '../features/basket/basketSlice';
import { catalogSlice } from '../features/catalog/catalogSlice';
import { counterSlice } from '../features/contact/counterSlice';
// import { createStore } from 'redux';
// import counterReducer from '../features/contact/counterReducer';



//Old Method
// export function configureStore(){
//     return createStore(counterReducer);
// }


export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        basket: basketSlice.reducer,
        catalog: catalogSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//Costum Hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;