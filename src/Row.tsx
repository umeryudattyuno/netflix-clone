import { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.scss";
import { API_KEY } from "./requests";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name?: string;
  title?: string;
  original_name?: string;
  poster_path?: string;
  backdrop_path?: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl(null);
    } else {
      try {
        const trailerResponse = await axios.get(
          `/tv/${movie.id}/videos?api_key=${API_KEY}`
        );
        const trailerId = trailerResponse.data.results[0]?.key;
        if (trailerId) {
          setTrailerUrl(trailerId);
        } else {
          const trailerUrl = await movieTrailer(movie?.name || movie?.title || movie?.original_name || "");
          if (trailerUrl) {
            const urlParams = new URLSearchParams(new URL(trailerUrl).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.error('No trailer found for this movie.');
          }
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    }
  };

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow ? "Row-poster-large" : ""}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name || movie.title || movie.original_name || "Movie"}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
