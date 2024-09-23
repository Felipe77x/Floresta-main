import express from "express";
import { bookRouter } from "./src/routes/routes.js";
import { deforestationRouter } from "./src/routes/desmatacao-router.js";
import { pollutionRouter } from "./src/routes/poluicao-router.js";
import cors from 'cors'

const app = express();

app.use(cors());

app.use(express.json());
app.use('/floresta', bookRouter);  //--> book/all
app.use('/desmatacao', deforestationRouter);
app.use('/pollution', pollutionRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Nosso app está rodando na porta: http://localhost:${PORT}`);
});
