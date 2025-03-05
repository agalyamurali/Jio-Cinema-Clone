import logo from "../../src/assets/jc_logo_v2.svg";
import crown from "../../src/assets/crown.svg";
import { useEffect, useState } from "react";
import Show from "./show";

const Header = (props) => {
  let navLinks = ["Home", "Movies", "Sports", "TV Shows", "More"];
  let [searchTitle, setSearchTitle] = useState("");
  let [filteredMovies, setFilteredMovies] = useState([]);

  // Use useEffect correctly (placed at the top level)
  useEffect(() => {
    if (searchTitle !== "") {
      let filtered = props.movies.filter((movie) =>
        movie.name.toUpperCase().includes(searchTitle.toUpperCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]); // Clear results when input is empty
    }
  }, [searchTitle, props.movies]); // Runs when searchTitle or movies change

  return (
    <>
      <header className="nav">
        <div className="nav-left">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>

          <div className="king">
            <img src={crown} alt="crown" />
            <p>Premium</p>
          </div>

          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="navLink">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <i className="fa-solid fa-search"></i>
          <input
            placeholder="Movies, TV shows and more"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <i className="fa-solid fa-microphone"></i>
        </div>
      </header>

      {/* Show search results only if filteredMovies is not empty */}
      {filteredMovies.length > 0 && (
        <div className="searchResults">
          {filteredMovies.map((movie) => (
            <Show key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
