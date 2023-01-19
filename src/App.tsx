import React, { useState } from "react";
import { films } from "./models/film";
import FilmCard from "./components/FilmCard";
import "./styles/app.scss";
import { FormGroup, Input, Label } from "reactstrap";

type OrderByOptions = "year" | "name" | "country"

export default function App() {

    const [orderBy, setOrderBy] = useState<OrderByOptions>("year");

    return (
        <div className="container-fluid app-root">
            <h1 className="text-center">Filmes Favoritos</h1>
            <div className="col-md-2">
                <FormGroup>
                    <Label>Ordernar por:</Label>
                    <Input type="select" onChange={e => setOrderBy(e.target.value as OrderByOptions)}>
                        <option value="year">Ano de lançamento</option>
                        <option value="name">Nome do filme</option>
                        <option value="country">País de origem</option>
                    </Input>
                </FormGroup>
            </div>
            <div className="row">
                {films.sort((a, b) => {
                    if (orderBy === "year") {
                        if (a.releasedYear < b.releasedYear) return -1;
                        if (a.releasedYear > b.releasedYear) return 1;
                        return 0;
                    } else if (orderBy === "name") {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    } else if (orderBy === "country") {
                        if (a.country < b.country) return -1;
                        if (a.country > b.country) return 1;
                        return 0;
                    }
                    return 0;
                }).map(item => (
                    <div className="col-md-4" key={item.id}>
                        <FilmCard film={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
