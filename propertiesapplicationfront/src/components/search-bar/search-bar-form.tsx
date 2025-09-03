'use client'
import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setFilterQuery } from "@/redux/features/properties-slice";
import "./search-bar-form.css";

export const SearchBarForm = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.properties.filterQuery);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    dispatch(setFilterQuery(searchTerm));
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== "") {
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setFilterQuery(''));
    };
  }, [dispatch]);
  return (
    <form
      aria-label="form-search"
      className={'container'}
      onSubmit={handleSearch}
    >
      <div className={'input-group'}>
        <input
          type="text"
          className="form-control"
          name="Search"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          required={true}
          alt="search coin"
        />

        <div className={"input-group-append"}>
          <button className={'btn-search'} type="submit">
            <FiSearch />
          </button>
        </div>
      </div>
    </form>
  );
};