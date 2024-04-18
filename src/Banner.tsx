import { useEffect, useState } from "react";
import axios from "./axios";
import { requests } from "./request";
import "./Banner.scss";

type MovieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<MovieProps>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);  // feachNetflixOriginals が fetchNetflixOriginals の誤りなのでは？
        console.log(request.data.result);

        if (request.data.results.length > 0) {
          setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str: string, n: number): string | undefined {
    if (!str) return undefined;
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>
        <h1 className="Banner-description">{truncate(movie?.overview || '', 150)}</h1>
      </div>
      <div className="Banner-fadeBottom" />
    </header>
  );
};
