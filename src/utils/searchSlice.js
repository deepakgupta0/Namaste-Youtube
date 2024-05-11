import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: {},
  },
  reducers: {
    cacheData: (state, action) => {
      Object.assign(state.data, action.payload);
      console.log(current(state.data), action);
    },
  },
});
export const { cacheData } = searchSlice.actions;
export default searchSlice.reducer;
