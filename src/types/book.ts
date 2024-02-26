import { Document } from 'mongoose'

export interface IBooks extends Document {
    find(): IBooks[] | PromiseLike<IBooks[]>
    findOne(): IBooks[] | PromiseLike<IBooks[]>
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