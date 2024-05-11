import { formatViews } from "../../utils/helpers";
const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="shadow-sm">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails.standard.url}
        width={thumbnails.standard.width}
        height={thumbnails.standard.height}
        loading="lazy"
      />
      <ul>
        <li className="font-bold my-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </li>
        <li className=" whitespace-nowrap overflow-hidden text-ellipsis">
          {channelTitle}
        </li>
        <li className=" whitespace-nowrap overflow-hidden text-ellipsis">
          {formatViews(statistics.viewCount)} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
