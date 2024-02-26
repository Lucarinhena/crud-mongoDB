import { model, Schema } from "mongoose";
import { IBooks } from "../types/book";

 const bookSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        }

    }
 )

export default model<IBooks>('Books', bookSchema)

 