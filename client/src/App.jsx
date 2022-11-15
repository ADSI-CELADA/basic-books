import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CreateBooks } from "./pages/CreateBooks";
import { EditBooks } from "./pages/EditBooks";
import { Libreria } from "./pages/Libreria";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Libreria />} />
        <Route path="/new" element={<CreateBooks />} />
        <Route path="/edit" element={<EditBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
