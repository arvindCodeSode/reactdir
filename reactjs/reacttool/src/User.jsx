import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "./features/todos/addTodoSlice";

const User = ()=>{
const [searchData, setSearchData] = useState('');
// const totalUser = useSelector((state)=>{return state.app});

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getAllUser())
},[])
// console.log(totalUser);

    return (

        <>
        <h1>Hello World I am here</h1>
        </>
    )
}
export default User;