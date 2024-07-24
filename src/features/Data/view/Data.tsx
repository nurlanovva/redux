import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../app/store"
import { fetchTodo } from "../model/dataSlice"


const Data = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    const todo = useSelector((state: RootState) => state.todo)
    console.log(todo)
    return(
        <></>
    )
}


export default Data