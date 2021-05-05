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

  function handlePexelsResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001aacf4c1701044b84b18b5cf49c70a7b1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchWord}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
