import { increment, decrement } from "../model/counterSlice"
import { useDispatch, useSelector  } from "react-redux"
import { RootState, AppDispatch } from "../../../app/store"

const Counter = () => {

    const dispatch = useDispatch<AppDispatch>()
    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <>
        {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}

export default Counter