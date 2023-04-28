import { formatDistanceToNow, parseISO } from "date-fns";

interface TimeProps {
  timeStamp: string;
  style?: string;
}

export const TimeAgo = ({ timeStamp, style }: TimeProps) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeStamp} className={`grow ${style}`}>
      <i>{timeAgo}</i>
    </span>
  );
};
