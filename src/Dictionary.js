import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search" onSubmit={search}>
        <input
          type="Search"
          placeholder="Search for a word"
          onChange={handleChange}
          className="search-input"
        />
      </form>

      <Results results={results} />
    </div>
  );
}
