import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../features/posts/postsSlice";
import usersSliceReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    users: usersSliceReducer,
  },
});

export { store };
