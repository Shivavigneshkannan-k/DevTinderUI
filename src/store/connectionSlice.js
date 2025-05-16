import { createSlice } from "@reduxjs/toolkit";

const connection = createSlice({
  name: "connection",
  initialState: {
  },
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    }
    // removeConnection: (state,action)=>{
    //     const userId = state.userId;
    //     astate.filter()
    // }
  }
});

export const { addConnections } = connection.actions;
export default connection.reducer;
