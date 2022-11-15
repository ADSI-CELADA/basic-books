export const Books = ({ libros }) => {
  return (
    <>
      <ul key={libros.id}>
        <li> {libros.nombre_libro} </li>
        <li> {libros.autor_libro} </li>
        <li> {libros.fecha_libro} </li>
        <button>Edit</button>
        <button>Delete</button>
      </ul>
    </>
  );
};
