import { createSlice } from "@reduxjs/toolkit";

const request = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequest: (state,action)=>{
        const newRequest = state.filter( req => req.requestId!=action.payload);
        return newRequest;
    }
  }
});

export const { addRequests,removeRequest } = request.actions;
export default request.reducer;
