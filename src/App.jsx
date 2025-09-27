import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Redirect default path to login */}
        <Route path="*" element={<Login />} />
      </Routes>
  );
}

export default App;
