import React, { useState } from "react";
import "./Index.css";
import Axios from "axios";
import Load from "../assets/img/load.svg";

export default props => {
  const [artista, setArtista] = useState("");
  const [musica, setMusica] = useState("");
  const [cifra, setCifra] = useState("Cifra...");
  const [loadVisivel, setLoadVisivel] = useState('none')

  let queryArtista;
  let queryMusica;

  function changeArtista(e) {
    let string = e.target.value;

    string = string.replace(/ /g, "-");
    string = string.toLowerCase();
    setArtista(string);
    console.log(string);
  }

  function changeMusica(e) {
    let string = e.target.value;
    string = string.replace(/ /g, "-");
    string = string.toLowerCase();
    setMusica(string);
    console.log(string);
  }

  function buscar() {

    setLoadVisivel('inline')
    Axios.get(
      "http://localhost:8080/?artista=" +
      artista +
      "&musica=" +
      musica
    ).then(res => {
      setCifra(res.data);
      console.log(res.data);

      console.log(queryArtista);
      console.log(queryMusica);
      setLoadVisivel('none')
    });
  }

  let loadEstilo = {

    display: loadVisivel
  }


  document.addEventListener('keypress', (e) => {

    console.log(e)
    if (e.key == "Enter") {

      buscar()


    }

  })

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <input
              type="text"
              placeholder="Artista"
              className="m-5"
              value={artista}
              onChange={changeArtista}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <input
              type="text"
              placeholder="Música"
              className="m-5"
              value={musica}
              onChange={changeMusica}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <button
              className="btn btn-danger btn-lg text-center m-5"
              onClick={buscar}
            >
              Buscar
            </button>
          </div>
        </div>

        <div className='text-center m-5'>
          <img src={Load} className="load" alt="" style={loadEstilo} />
        </div>

        <div className="row text-center">
          <div className="col-12 yellow">
            <pre>{cifra}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
