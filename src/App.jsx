import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { SignUp } from "./pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
