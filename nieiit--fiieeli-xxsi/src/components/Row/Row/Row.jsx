import './Row.css';
import axios from '../../../utils/axios';
import { useState, useEffect } from 'react';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const base_Url = "https://image.tmdb.org/t/p/original";

  // Fetch movies
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error fetching movies:", error);
      }
    })();
  }, [fetchUrl]);

  // YouTube options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  // Handle trailer play
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("Trailer not found for", movie);
          }
        })
        .catch((error) => console.log("Error finding trailer:", error));
    }
  };

  // ✅ Return must be inside component function
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies?.map((movie, index) => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
              key={index}
              onClick={() => handleClick(movie)}
              src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie?.name || movie?.title || "Untitled"}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          )
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

             


export default Row;



// import './Row.css';
// import axios from '../../../utils/axios';
// import { useState, useEffect } from 'react';
// import YouTube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState('');
//   const base_Url = "https://image.tmdb.org/t/p/original";

//   useEffect(() => {
//     (async () => {
//       try {
//         const request = await axios.get(fetchUrl); // ✅ use fetchUrl
//         setMovies(request.data.results);
//       } catch (error) {
//         console.log("error", error);
//       }
//     })();
//   }, [fetchUrl, title]);

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: { autoplay: 1 },
//   };

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl('');
//     } else {
//       setTrailerUrl("XqZsoesa55w"); // Example: replace with movie trailer logic
//     }
//   };

//   return (
//     <div className='row'>
//       <h1>{title}</h1>
//       <div className='row_posters'>
//         {movies?.map((movie, index) => (
//           <img
//             key={index}
//             onClick={() => handleClick(movie)}
//             src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//             alt={movie.name}
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>
//       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//     </div>
//   );
// };

// export default Row;