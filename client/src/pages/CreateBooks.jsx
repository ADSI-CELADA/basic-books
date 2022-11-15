import {Formik} from "formik"

export const CreateBooks = () => {
  return (
    <>
    <h1>Create Book</h1>
      <Formik
      initialValues={{}}
      >
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Titulo del libro"
          
          />
          <input type="text" placeholder="Autor del libro"/>
          <input type="text" placeholder="Fecha del libro"/>
        </form>
      </Formik>
    </>
  )
}
