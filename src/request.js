
export const API_KEY = "bbb372a51a40a08c1ae5971eae51bb9d"; // TMDBのAPIKeyを入れる
const BASE_MOVIE_URL = "/discover/movie?api_key=";
const BASE_TV_URL = "/discover/tv?api_key=";

export const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=ja`,
    fetchNetflixOriginals:`${BASE_MOVIE_URL}${API_KEY}&with_networks=213`,
    fetchTopRated:`${BASE_MOVIE_URL}${API_KEY}&language=ja`,
    fetchActionMovies:`${BASE_MOVIE_URL}${API_KEY}&with_genres=28`,
    fetchComedyMovies:`${BASE_MOVIE_URL}${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`${BASE_MOVIE_URL}${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`${BASE_MOVIE_URL}${API_KEY}&with_genres=10749`,
    fetchMysteryMovies:`${BASE_MOVIE_URL}${API_KEY}&with_genres=9648`,
}