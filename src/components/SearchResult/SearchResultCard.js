import { Link } from "react-router-dom";

const SearchResultCard = ({ data }) => {
  const { snippet, id } = data;
  const { title, thumbnails, channelTitle, description } = snippet;
  console.log(data);
  if (!description) return null;
  return (
    <Link
      className="md:flex md:items-start my-2 border border-gray-100 shadow-md p-2 rounded-xl inline-block"
      to={"/watch?q=" + id.videoId}
    >
      <div className="rounded-xl">
        <img
          className="rounded-xl w-full"
          src={thumbnails?.high?.url}
          height={thumbnails?.high?.height}
          width={thumbnails?.high?.width}
        />
      </div>
      <div className="p-3">
        <div className="text-xl font-bold">{title}</div>
        <p className="text-lg my-2">{description}</p>
        <div className="text-sm text-gray-400 my-2">{channelTitle}</div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
