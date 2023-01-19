import React from "react";
import { IFilm } from "../models/film";
import "../styles/filmCard.scss";

type Props = {
    film: IFilm;
}

export default function FilmCard({ film }: Props): JSX.Element {
    return (
        <div className="film-card">
            <div className="image-film">
                <img loading="lazy" src={film.imageUrl} alt={film.name} width="100%" />
            </div>
            <div className="text-center">
                <h3>{film.name}</h3>
                <p>{film.releasedYear} - {film.country}</p>
                <p>Dirigido por {film.director}</p>
            </div>
        </div>
    );
}
