import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "리덕스 툴킷 이란..",
    content:
      "Redux Toolkit은 Redux 로직을 작성하기 위해 저희가 공식적으로 추천하는 방법입니다",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices란..",
    content:
      "store안에 모든 정보를 담는데 프로그램이 커지면, 기능별로 작은 store를 만들어서 사용해야하는데 그걸 Slice라고함 ",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
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
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    // 버튼 클릭 시 postId: post.id와 reaction: name을 보냄
    reactionAdded: (state, action) => {
      // 받은 post.id와 reaction: name을 postId와 reaction에 할당
      const { postId, reaction } = action.payload;

      const existingPost = state.find((post) => post.id === postId);

      // 게시물을 찾을경우 기존 게시글에 reactions[받은name]을 +1 증가시킴
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
