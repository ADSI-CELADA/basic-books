import express, { json } from 'express'
import dotenv from 'dotenv/config'
import routerBook from './routers/Books.routing.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000


// Vars of entorn
dotenv

// -> Middlewares <-

// -> Routs <-
app.use(cors())
app.use(json())
app.use(routerBook)

// -> Server <-
app.listen(port, () => {
    console.log(`Server running uvub ${port}`);
})