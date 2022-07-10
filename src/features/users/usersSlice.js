import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "홍길동",
  },
  {
    id: "1",
    name: "슈퍼맨",
  },
  {
    id: "2",
    name: "배트맨",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
