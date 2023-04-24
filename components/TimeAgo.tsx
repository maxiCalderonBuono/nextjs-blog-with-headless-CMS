import { formatDistanceToNow, parseISO } from "date-fns";

interface TimeProps {
  timeStamp: string;
}

export const TimeAgo = ({ timeStamp }: TimeProps) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeStamp} className="grow">
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
