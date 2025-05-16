import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeedUser: (state, action) => {
      return action.payload;
    },
    removefeedUser: (state, action) => {
        // console.log(action.payload);
      const newFeed = state.filter((req) => req._id != action.payload);
      return newFeed;
    }
  }
});

export const { addFeedUser, removefeedUser } = feed.actions;
export default feed.reducer;
