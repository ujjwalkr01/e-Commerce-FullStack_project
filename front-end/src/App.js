import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="/add" element={<h1>AddProduct Page</h1>} />
          <Route path="/update" element={<h1>UpdateProduct Page</h1>} />
          <Route path="/logout" element={<h1>Logout Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>E-commerce Dashboard</h1> */}
      <Footer />
    </div>
  );
}

export default App;
