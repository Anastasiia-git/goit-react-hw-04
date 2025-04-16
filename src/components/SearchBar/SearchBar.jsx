import React, { useState } from "react";
import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

function SearchBar({ handleSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search.length === 0) {
      toast("😉 Write here what you are looking for.");
      return;
    }

    handleSearch(search);
    setSearch("");
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <header className={s.box}>
      <Toaster position="top-left" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <input
          className={s.field}
          type="text"
          name="search"
          placeholder="Search images and photos"
          value={search}
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
