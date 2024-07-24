import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/model/counterSlice'
import todoReducer from '../features/Data/model/dataSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})


export type RootState = ReturnType<typeof store.getState> //типизация useSelector
export type AppDispatch = typeof store.dispatch //типизация useDispatch

export default store