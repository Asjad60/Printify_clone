import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
