import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const moviesData = [
  {
    id: 1,
    image:
      "https://images.uzmovi.tv/2025-07-17/1467a1a30198f4e5adc98d71da39cd96.jpg",
    title: "M3GAN 2",
    year: 2025,
    genre: "Horror",
    country: "USA",
  },
  {
    id: 2,
    image:
      "https://images.uzmovi.tv/2022-11-27/51e50b24fc42cc262b84ad44ee41a128.jpg",
    title: "Saylent hill ",
    year: 2022,
    genre: "Horror",
    country: "USA",
  },
  {
    id: 3,
    image:
      "https://images.uzmovi.tv/2022-07-08/d306460829b75839d1bfad3089724da6.jpg",
    title: "Solum",
    year: 2022,
    genre: "Action",
    country: "USA",
  },
  {
    id: 4,
    image:
      "https://images.uzmovi.tv/2022-10-19/9a230ad9933dc6ae268dbdf8d5518db9.jpg",
    title: "Kelajakdagi tuzoq",
    year: 2022,
    genre: "Fantastik",
    country: "USA",
  },
  {
    id: 5,
    image:
      "https://images.uzmovi.tv/2025-04-05/a8c46babdd75a0d659dcf2a4f0f0ccbc.jpg",
    title: "Amerikalik qaroqchilar",
    year: 2023,
    genre: "Criminal",
    country: "USA",
  },
  {
    id: 6,
    image:
      "https://images.uzmovi.tv/2022-03-31/5c508a9832475a1c04a753be938b6ef4.jpg",
    title: "Oy ritsari",
    year: 2022,
    genre: "Action",
    country: "USA",
  },
];

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  return (
    <section className="section">
      <div className="cont container">
        <h1 className="title">Cards list</h1>
        <div className="cards-list">
          {movies.map((movie) => {
            const { id, image, title, year, genre, country } = movie;
            return (
              <div className="card" key={id}>
                <div className="card-image">
                  <img src={image} alt={title} />
                </div>
                <div className="card-info">
                  <div className="info">
                    <h2 className="movie-title">Nomi: <span>{title}</span></h2>
                    <p className="movie-year">Yili: {year}</p>
                    <p className="movie-genre">Janri: {genre}</p>
                    <p className="movie-country">Davlat: {country}</p>
                  </div>
                  <div className="btns">
                    <button className="delete-btn">
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
      </div>
    </section>
  );
};

export default App;
