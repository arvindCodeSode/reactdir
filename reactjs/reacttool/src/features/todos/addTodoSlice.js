import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllUser = createAsyncThunk(
    "getUsers",
    async (args, { rejectWithValue }) =>{
        try{
            const response = await fetch("http://localhost:3000/posts")

            const result = await response.json();
            console.log(result);
            return result
        }
        catch(err){
            return rejectWithValue("Opps Found and error", err.response.data);
        }
    }
)

export const gitUser = createSlice({
    name:"gitUser",
    initialState:{
        users:[],
        loading:false,
        error:null,
        searchData:[],
    },
    reducers:{
        searchUser: (state, action) =>{
            state.searchData = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUser.pending, (state)=>{
            state.loading=true;
        }).addCase(getAllUser.fulfilled, (state, action)=>{
            state.loading=false;
            console.log(action);
            state.users=action.payload;
            state.searchData=[];
        }).addCase(getAllUser.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }   
})

export const { searchUser } = gitUser.actions;
export default gitUser.reducer;