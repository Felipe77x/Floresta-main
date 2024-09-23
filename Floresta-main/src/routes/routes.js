import { Router } from "express";
import { createBook, getfloresta } from "../controllers/controllers.js";

const bookRouter = Router();

bookRouter.get("/all", getfloresta);
bookRouter.post("/", createBook);

export { bookRouter };
