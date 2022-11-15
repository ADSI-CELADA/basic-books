import axios from 'axios'

export const getBooks = async () => {
    return await axios.get('http://localhost:4000/libros')
}

export const createBooks = async () => {
    return await axios.post('http://localhost:4000/createBook')
}