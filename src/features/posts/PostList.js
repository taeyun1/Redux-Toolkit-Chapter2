import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAge from "./TimeAge";
import ReactionButtons from "./ReactionButtons";

function PostList() {
  const posts = useSelector(selectAllPosts);

  // 최신 게시물이 상위로 설정
  // 게시물 정렬, 음수 또는 양수 또는 0 하나가 다음보다 큰 경우에 따라 그 날짜 문자열을 반환
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  console.log("posts", posts);
  console.log("orderedPosts", orderedPosts);

  const renderedPosts = orderedPosts.map((post) => (
    <article className="items" key={post.id}>
      <h3>제목 : {post.title}</h3>
      <p>내용 : {post.content}</p>

      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAge timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostList;
