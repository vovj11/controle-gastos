import { Routes, Route } from "react-router-dom";
import { Transactions } from "./pages/Transactions/Transactions";
import { Persons } from "./pages/Persons/Persons";
import { Categories } from "./pages/Categories/Categories";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/persons" element={<Persons />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
