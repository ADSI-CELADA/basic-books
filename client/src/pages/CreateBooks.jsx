import { Formik, Form } from "formik";
import { createBooks } from "../api/libros";

export const CreateBooks = () => {
  return (
    <>
      <h1>Create Book</h1>
      <Formik
        initialValues={{
          nombre_libro: "",
          autor_libro: "",
          fecha_libro: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            let response = await createBooks(values);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Titulo del libro"
              name="nombre_libro"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Autor del libro"
              name="autor_libro"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              placeholder="Fecha del libro"
              name="fecha_libro"
              onChange={handleChange}
              required
            />

            <button type="submit"> {isSubmitting ? 'Enviando...' : 'Enviar'} </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
