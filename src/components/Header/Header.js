import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displaySearchList, toggleMenuOpen } from "../../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { cacheData } from "../../utils/searchSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenuOpen());
  };
  const cache = useSelector((store) => store.search.data);
  const [searchText, setsearchText] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const handleInputChange = (e) => {
    setsearchText(e.target.value);
  };
  const showSuggestions = useSelector((store) => store.app.isSearchListOpen);
  const getSuggestionList = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchText);
      const json = await data.json();
      setSearchList(json[1]);
      dispatch(displaySearchList(true));
      dispatch(
        cacheData({
          [searchText]: json[1],
        })
      );
    } catch (error) {
      setSearchList([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchText]) {
        setSearchList(cache[searchText]);
      } else {
        getSuggestionList();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div className="grid grid-flow-col p-5 shadow-lg items-center sticky top-0 z-10 bg-white">
      <div className="flex col-span-2">
        <img
          onClick={handleToggle}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2 hidden md:inline-block"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-8">
        <div className="relative">
          <input
            className="w-2/3 md:w-1/2 border border-gray-400 p-2 md:px-5 rounded-l-full"
            type="text"
            value={searchText}
            onChange={(e) => handleInputChange(e)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
          {showSuggestions && (
            <div className="w-2/3 md:w-1/2 bg-white z-10 absolute rounded-xl">
              {searchList?.length > 0 && (
                <ul className="bg-white p-4 border border-gray-100 shadow-lg">
                  {searchList.map((list) => (
                    <Link
                      to={"/result?search=" + list}
                      className="block text-ellipsis whitespace-nowrap overflow-hidden font-medium text-sm md:text-lg hover:bg-gray-200"
                    >
                      <li>🔎 {list}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
