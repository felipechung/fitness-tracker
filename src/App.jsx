import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { SignUp } from "./pages/signUp";
import { FitnessTracker } from "./pages/fitnessTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/fitness-tracker" element={<FitnessTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
