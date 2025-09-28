import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar";
import SalesReportPage from "./pages/SalesReportPage";
import ProtectedRoute from "./components/routes/ProtectedRoute"; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <SalesReportPage />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown paths to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
