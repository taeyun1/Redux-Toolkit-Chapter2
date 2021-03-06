import React from "react";

import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);

  // usersSlice에서 users를 찾을꺼임, user.id가 userId랑 같으면 할당
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "작성자가 없습니다."}</span>;
}

export default PostAuthor;
