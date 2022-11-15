import { useState, useEffect } from "react";
import { getBooks } from "../api/libros";
import { Books } from "../components/Books";

export const Libreria = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const response = await getBooks();
      setBooks(response.data.data);
    }
    loadBooks()
  }, []);

  return (
    <>
      <h1>Libreria</h1>

      {books.map((libros) => {
        return <Books key={libros.id} libros={libros} />;
      })}
    </>
  );
};
