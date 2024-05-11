import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const getVideosData = async () => {
    try {
      const videoPromise = await fetch(YOUTUBE_VIDEOS_API);
      const videoListJson = await videoPromise.json();
      console.log(videoListJson);
      setVideoList(videoListJson.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getVideosData();
  }, []);
  return (
    <div className="grid  grid-cols-1 md:grid-cols-4 gap-4">
      {videoList.length === 0 ? (
        <Shimmer />
      ) : (
        videoList.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
