import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../app/store"
import { fetchTodo } from "../model/dataSlice"
import Card from "../../../shared/UI/Card"

const Data = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    const { todo } = useSelector((state: RootState) => state.todo)
    return(
        <>{
        todo?.map((item) => (
            <Card key={item.id} cardData={item} />
        ))
        }</>
    )
}


export default Data