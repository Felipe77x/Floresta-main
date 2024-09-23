// import {books } from "../database/database.js";
import { Floresta } from "../models/models.js";
// import { Floresta} from "../models/models.js";

import {books} from '../database/database.js'

export const getfloresta = (req, res) => {
    res.status(200).send(books);
};

export const createBook = (req, res) => {
    const newfloresta = req.body;

    const dadoFormatado = new Floresta(
        newfloresta.id,
        newfloresta.title,
        newfloresta.author
    );

    books.push(dadoFormatado);

    res.status(201).send(`A floresta ${dadoFormatado.title} foi criado com sucesso!`);
};
