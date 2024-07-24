import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface ToDoState{
    todo: any
    status: string
    error: string | null
}

const initialState: ToDoState = {
    todo: null,
    status: 'idle',
    error: null
}

export const fetchTodo = createAsyncThunk(
    'todos/fetchTodo',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // const data = await res.json()
        return res
    }
)


const todoSlice = createSlice({
    name: "todos",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.todo = action.payload
            })
    }
})

export default todoSlice.reducer