// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import PostsExcerpt from "./PostsExcerpt";
// import {
//   selectAllPosts,
//   getPostsStatus,
//   getPostsError,
//   fetchPosts,
// } from "./postsSlice";

// function PostList() {
//   const dispatch = useDispatch();

//   const posts = useSelector(selectAllPosts);
//   const postStatus = useSelector(getPostsStatus);
//   const error = useSelector(getPostsError);

//   // 최신 게시물이 상위로 설정
//   // 게시물 정렬, 음수 또는 양수 또는 0 하나가 다음보다 큰 경우에 따라 그 날짜 문자열을 반환
//   // const orderedPosts = posts
//   //   .slice()
//   //   .sort((a, b) => b.date.localeCompare(a.date));

//   useEffect(() => {
//     if (postStatus === "idle") {
//       dispatch(fetchPosts());
//     }
//   }, [postStatus, dispatch]);

//   let content;
//   // postStatus가 로딩중이면 실행
//   if (postStatus === "로딩중...") {
//     content = <p>"로딩중..."</p>;

//     // 성공시 최신 날짜 순대로 나열
//   } else if (postStatus === "성공..!") {
//     const orderedPosts = posts
//       .slice()
//       .sort((a, b) => b.date.localeCompare(a.date));
//     content = orderedPosts.map((post) => (
//       <PostsExcerpt key={post.id} post={post} />
//     ));
//   } else if (postStatus === "failed") {
//     content = <p>{error}</p>;
//   }

//   return (
//     <section>
//       <h2>Posts</h2>
//       {content}
//     </section>
//   );
// }

// export default PostList;

import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
export default PostsList;
