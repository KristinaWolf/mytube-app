import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getContentAction } from "../../store/content/actions";
import "./index.scss";

const Search = () => {
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_YOUTUBE;
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState();
  const onFinish = (event) => {
    event.preventDefault();
    navigate("/search");
    dispatch(
      getContentAction.request({
        part: "snippet",
        key: apiKey,
        order: "viewCount",
        q: searchValue,
        maxResults: 24,
      })
    );
  };
  return (
    <>
      <form onSubmit={onFinish} className="search">
        <input
          name="searchQuery"
          className="search__input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="search__btn">Go</button>
      </form>
    </>
  );
};

export default Search;
