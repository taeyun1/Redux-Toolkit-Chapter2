import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAge from "./TimeAge";

function PostList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article className="items" key={post.id}>
      <h3>제목 : {post.title}</h3>
      <p>내용 : {post.content}</p>

      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAge timestamp={post.date} />
      </p>
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
