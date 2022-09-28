import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import "./styles.scss";
import Courts from "./components/Courts";
import axios from "axios";

import Arrow from './assets/arrow.png';

function App() {
  const [query, setQuery] = useState("");
  const [courts, setCourts] = useState([]);

  const filterResults = ({ data }) => {
    const results = data.filter(
      (item) => item.title.toLowerCase().includes(query)
      // item.address.toLowerCase().includes(query) ||
      // item.type.toLowerCase().includes(query)
    );

    setCourts(results);
  };

  useEffect(() => {
    const fetchCourts = () => {
      axios
        .get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
        .then(function (response) {
          return response;
        })
        .then(filterResults);
    };

    // if (
    //   query.length === 0
    //   || query.length >= 3
    // )
    fetchCourts();
  }, [query]);

  return (
    <Router>
      <main className="container">
        <h1 className="page__title">Our Latest Developments</h1>
        <div className="input__wrapper">
          <label className="search__label">Filter</label>
          <input
            className="search"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>

        <Courts courts={courts} />
        <button className="btn btn--more">
          See more
          <img className="arrow" src={Arrow} alt="arrow" />
        </button>
      </main>
    </Router>
  );
}

export default App;
