import { useState } from "react";
import { moviesData } from "./data";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const handleCardDelete = (deleteID) => {
    const filtered = movies.filter((movie) => deleteID !== movie.id);
    setMovies(filtered);
  };

  return (
    <section className="section">
      <div className="cont container">
        <h1 className="title">Cards list</h1>
        <div className="cards-list">
          {movies.map((movie) => {
            const { id, title, year, genre, country } = movie;
            return (
              <div className="card" key={id}>
                <div className="card-info">
                  <div className="info">
                    <h2>
                      Nomi: <span>{title}</span>
                    </h2>
                    <p>Yili: {year}</p>
                    <p>Janri: {genre}</p>
                    <p>Davlat: {country}</p>
                  </div>
                  <div className="btns">
                    <button
                      onClick={() => handleCardDelete(id)}
                      className="delete-btn"
                    >
                      <FaRegTrashAlt />
                    </button>
                    <button className="edit-btn">
                      <MdModeEdit />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="modal-window">
          <div>
            <input type="text" className="movie-name" placeholder="Movie mane..." />
            <input type="text" className="movie-year" placeholder="Year..." />
            <input type="text" className="movie-genre" placeholder="Genre..." />
            <input type="text" className="movie-country" placeholder="Country..." />
          </div>
          <button className="edit-btn">Edit</button>
        </div>
      </div>
    </section>
  );
};

export default App;
