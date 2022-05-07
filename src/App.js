import "./styles.css";
import React, { useState } from "react";
import { DataMovie } from "./component/DataMovie";
import movieliste from "./component/MovieListe";
import AddMovie from "./component/AddMovie";
import Search from "./component/search";
function Mov() {
  const [MovieListe, setMovieListe] = useState(DataMovie);
  const addNewMovie = (newMovie) => {
    setMovieListe([...MovieListe, newMovie]);
  };
  const [search, setSearch] = useState(""); 
  return (
    <div className="wrapper">
      <Search  setSearch={setSearch} />
      <AddMovie addNewMovie={addNewMovie} /> 
      <MovieListe movieListe={movieliste} />
    </div>
  );
}

export default Mov;

