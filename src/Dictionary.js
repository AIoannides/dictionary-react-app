import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord} definition`);
  }

  function handleChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="Search"
          placeholder="Search for a word"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
