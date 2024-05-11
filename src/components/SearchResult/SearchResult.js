import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API } from "../../utils/constants";
import SearchResultCard from "./SearchResultCard";
import { useDispatch } from "react-redux";
import { displaySearchList } from "../../utils/appSlice";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText] = useSearchParams("search");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    dispatch(displaySearchList(false));
  }, [searchText]);
  const fetchData = async () => {
    const text = searchText.get("search");
    const data = await fetch(YOUTUBE_SEARCH_RESULT_API + text);
    const json = await data.json();
    setSearchResult(json.items);
  };

  return (
    <div className="md:w-2/3 md:mx-auto">
      {searchResult.map((result) => (
        <SearchResultCard data={result} />
      ))}
    </div>
  );
};

export default SearchResult;
