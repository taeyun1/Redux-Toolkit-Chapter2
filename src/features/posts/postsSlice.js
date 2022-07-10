import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "리덕스 툴킷 이란..",
    content:
      "Redux Toolkit은 Redux 로직을 작성하기 위해 저희가 공식적으로 추천하는 방법입니다",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "Slices란..",
    content:
      "store안에 모든 정보를 담는데 프로그램이 커지면, 기능별로 작은 store를 만들어서 사용해야하는데 그걸 Slice라고함 ",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },

      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
