import express, {Express} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/booksRoute'
import dotenv from 'dotenv'


dotenv.config()
const app: Express = express()

const PORT: string | number = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(todoRoutes)

const uri = process.env.DB_CONNECT
mongoose.connect(uri).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.log('Error connecting to the database')
    console.log(error)
})
