import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
