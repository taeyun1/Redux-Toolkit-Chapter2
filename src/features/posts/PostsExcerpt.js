import React from "react";

import PostAuthor from "./PostAuthor";
import TimeAge from "./TimeAge";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article className="items">
      <h3>제목 : {post.title}</h3>
      <p>내용 : {post.body.substring(0, 100)}</p>

      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAge timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
