import { Response, Request } from "express";
import { IBooks } from "../types/book";
import Books from "../models/bookModel";

const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books: IBooks[] = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    throw error;
  }
};

const createBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IBooks, "title" | "author" | "publishYear">;

    const books: IBooks = new Books({
      title: body.title,
      author: body.author,
      publishYear: body.publishYear,
    });
    const newBook: IBooks = await books.save();
    const allBooks: IBooks[] = await Books.find();

    res.status(201).json({
      message: "Books Added successfully",
      book: newBook,
      books: allBooks,
    });
  } catch (error) {
    throw error;
  }
};

const updateBooks = async (req: Request, res: Response): Promise<void> => {
  const bookFound = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!bookFound) {
    res.status(204).json({ message: "Book Updated" });
  }

  res.status(200).json({ message: "Books Updated successfully" });
};

const deleteBooks = async (req: Request, res: Response): Promise<void> => {
  const deletedBooks = await Books.findByIdAndDelete(req.params.id);
  if (!deletedBooks) {
    res.status(404).json({
      message: "Book not found",
    });
  }

  res.status(200).json({
    message: "Book deleted successfully",
  });
};

export { getBooks, createBooks, updateBooks, deleteBooks };
