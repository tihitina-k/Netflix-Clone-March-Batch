import { useState, useEffect } from "react";
import axios from "../../utils/axios.jsx";
import "./Banner.css";
import requests from "../../utils/requests";
// import callbackify from '../../../../node_modules/axios/lib/helpers/callbackify';
const Banner = () => {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, []);
  // function truncate(str,n) {
  //   returnstr?.length > n? str.substr(0,n-1) + '...' :str

  // }

  console.log(movies)

  return (
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies?.title || movies?.name || movies?.original_mame}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* <h1 className='banner_description'>{truncate(movies?.overview, 150)}</h1> */}
        {/* npm run build */}
        {/* continious production */}
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
