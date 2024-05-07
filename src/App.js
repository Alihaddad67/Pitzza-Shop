import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WerbKorb } from './Components/WerbKorb/WerbKorb';
import { Home } from './Components/Home/Home';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { AuthProvider } from "./Components/Utils/AuthProvider.jsx";
import { ProtectedRoute } from "./Components/Utils/ProtectedRoute.jsx";
import { UnProtectedRoute } from "./Components/Utils/UnProtectedRoute.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<UnProtectedRoute><LoginForm /></UnProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/Werbkorb" element={<ProtectedRoute><WerbKorb /></ProtectedRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
