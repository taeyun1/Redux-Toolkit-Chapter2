import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

const TimeAge = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date, {
      addSuffix: true, // 접미사 추가 ..전
      locale: ko, // 한국어
    });
    timeAgo = `${timePeriod}`;
  }

  return (
    <span title={timeAgo}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAge;
