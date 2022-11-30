import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./request";
import "./Banner.css";
const posterBaseUrl = "https://api.themoviedb.org/3";
export default function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchBase() {
      const request = await axios.get(
        `${posterBaseUrl}` + requests.fetchTrending
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchBase();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__button">
          <button className="banner__buttons">Play</button>
          <button className="banner__buttons">My List</button>

          <h1 className="banner__description">
            <div>{truncate(movie?.overview,150)}</div>
          </h1>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
