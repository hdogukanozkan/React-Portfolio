// import logo from "./logo.svg";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
