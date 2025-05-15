import {createSlice} from "@reduxjs/toolkit"

const user = createSlice({
    name: "user",
    initialState:{
        data :null
    },
    reducers:{
        addUserData: (state,action)=>{
            state.data = action.payload;
        },
        removeUserData: (state) => {
            state.data = null;
        }
    }
})

export const {addUserData,removeUserData} = user.actions;
export default user.reducer;