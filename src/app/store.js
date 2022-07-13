import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../features/posts/postsSlice";
import usersSliceReducer from "../features/users/usersSlice";
import counterSliceReducer from "../features/shunk/shunkSlice";

const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    users: usersSliceReducer,
    counter: counterSliceReducer,
  },
});

export { store };
