import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
