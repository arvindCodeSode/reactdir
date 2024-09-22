import { configureStore } from "@reduxjs/toolkit";
import  gitUser  from "../features/todos/addTodoSlice";
export const store = configureStore({
    reducer:{
        app:gitUser
    }
})