import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar";
import SalesReportPage from "./pages/SalesReportPage";

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<SalesReportPage />} />
        {/* Redirect default path to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
