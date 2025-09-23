const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  // etc...
}



export default requests;
// Create an object containing multiple API request paths for fetching different types of data from TMDb
// const requests = {
//   // Request to fetch trending movies/shows for the week, language set to English
// //   fetchTrending: /trending/all/week?api_key=${API_KEY}&language=en-US,
// // Request to fetch Netflix Originals (filtered by network ID 213, which is Netflix)
// //   fetchNetflixOriginals: /discover/tv?api_key=${API_KEY}&with_networks=213,
 
//   // Request to fetch comedy movies, filtered by the genre ID 35 (Comedy)
//   fetchComedyMovies: /discover/movie?api_key=${API_KEY}&with_genres=35,

//   // Request to fetch horror movies, filtered by the genre ID 27 (Horror)
//   fetchHorrorMovies: /discover/movie?api_key=${API_KEY}&with_genres=27,

//   // Request to fetch romance movies, filtered by the genre ID 10749 (Romance)
//   fetchRomanceMovies: /discover/movie?api_key=${API_KEY}&with_genres=10749,

//   // Request to fetch documentaries, filtered by the genre ID 99 (Documentary)
//   fetchDocumentaries: /discover/movie?api_key=${API_KEY}&with_genres=99,

//   // Request to fetch popular TV shows, language set to English, with pagination (page 1)
//   fetchTvShow: tv/popular?api_key=${API_KEY}&language=en-US&page=1,
//     // Request to fetch top-rated movies, language set to English
//   fetchTopRatedMovies: /movie/top_rated?api_key=${API_KEY}&language=en-US,
// };// Request to fetch action movies, filtered by the genre ID 28 (Action)
//   fetchActionMovies: /discover/movie?api_key=${API_KEY}&with_genres=28,
