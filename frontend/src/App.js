import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Status from "./pages/Status";
import Search from "./pages/Search";
import Update from "./pages/Update";
import AllRecords from "./pages/AllRecords";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/status" element={<Status />} />
        <Route path="/search" element={<Search />} />
        <Route path="/update" element={<Update />} />
        <Route path="/all" element={<AllRecords />} />
      </Routes>
      <img
        src="/kitten-and-dog.png"
        alt="kitty and doggy"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "300px",
          opacity: 0.8
        }}
      />
    </Router>
  );
}

export default App;