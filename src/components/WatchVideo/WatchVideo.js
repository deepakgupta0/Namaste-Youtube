import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../../utils/appSlice";
import CommentContainer from "../CommentContainer/CommentContainer";
import LiveChat from "../LiveChat/LiveChat";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, [dispatch]);
  return (
    <>
      <div className="md:flex">
        <iframe
          className="aspect-video w-full md:w-2/3"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="w-full md:w-1/3 ml-3">
          <LiveChat />
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <CommentContainer />
      </div>
    </>
  );
};

export default WatchVideo;
