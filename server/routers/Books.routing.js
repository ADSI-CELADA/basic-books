import express from "express";
import { viewBook, viewBooks, createBook, updateBook, deleteBook } from '../controllers/Books.js'


const routerBook = express.Router()

routerBook.get('/book/:id', viewBook)
routerBook.get('/libros', viewBooks)
routerBook.post('/createBook', createBook)
routerBook.put('/updateBook/:id', updateBook)
routerBook.delete('/deleteBook/:id', deleteBook)

export default routerBook