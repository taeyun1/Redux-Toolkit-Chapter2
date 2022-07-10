import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAge = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} 미만 전`;
  }

  return (
    <span title={timeAgo}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAge;
