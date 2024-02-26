import express, { Express, Router } from "express";
import {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
} from "../controllers";

const router: Router = express.Router();

router.get("/", getBooks);

router.post("/createBook", createBooks);

router.put("/updateBook/:id", updateBooks);

router.delete("/deleteBook/:id", deleteBooks);

export default router;
