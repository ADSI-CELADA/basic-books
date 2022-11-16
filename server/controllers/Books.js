import { conexion } from "../database/library.js";

export const viewBook = async (req, res) => {
  try {
    conexion.query(
      "SELECT * FROM libros WHERE id = ?",
      [req.params.id],
      (error, rows) => {
        if (rows) {
          return res.json({ data: rows });
        } else {
          return res.json({ data: error });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const viewBooks = async (req, res) => {
  try {
    conexion.query("SELECT * FROM libros", (error, rows) => {
      if (rows) {
        return res.json({ data: rows });
      } else {
        return res.json({ data: error });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const createBook = async (req, res) => {
  try {
    let { nombre_libro, autor_libro, fecha_libro } = req.body;
    conexion.query(
      "INSERT INTO `libros`(`nombre_libro`, `autor_libro`, `fecha_libro`) VALUES (?, ?, ?)",
      [nombre_libro, autor_libro, fecha_libro],
      (error, rows) => {
        if (rows) {
          return res.json({ data: "BOOK_INSERT" });
        } else {
          return res.json({ data: "ERROR_INSERT" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (req, res) => {
  try {
    conexion.query(
      "DELETE FROM libros WHERE id = ?",
      [req.params.id],
      (error, rows) => {
        if (rows) {
          return res.json({ data: "BOOK_DELETE" });
        } else {
          return res.json({ data: "DELETE_ERROR" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (req, res) => {
  try {
    let { nombre_libro, autor_libro, fecha_libro } = req.body;
    let { id } = req.params;
    conexion.query(
      "UPDATE libros SET nombre_libro = ?, autor_libro = ?, fecha_libro = ? WHERE id = ?",
      [nombre_libro, autor_libro, fecha_libro, id],
      (error, rows) => {
        if (rows) {
          return res.json({ data: "BOOK_UPDATE" });
        } else {
          return res.json({ data: "UPDATE_ERROR", error });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
