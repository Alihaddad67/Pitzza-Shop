import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WerbKorb } from './Components/WerbKorb/WerbKorb';
import { Home } from './Components/Home/Home';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { AuthProvider } from "./Components/Utils/AuthProvider.jsx";
import { ProtectedRoute } from "./Components/Utils/ProtectedRoute.jsx";
import { UnProtectedRoute } from "./Components/Utils/UnProtectedRoute.jsx";
import { Shop } from './Components/Shop/Shop.js';
import { CustomNav, Nav } from './Components/Nav/Nav.js';
import { ShopContextProvider } from './context/shopContext.js'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <AuthProvider>
            <CustomNav />
            <Routes>
              <Route path="/" element={<UnProtectedRoute><LoginForm /></UnProtectedRoute>} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/Shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
              <Route path="/Werbkorb" element={<ProtectedRoute><WerbKorb /></ProtectedRoute>} />
            </Routes>
          </AuthProvider>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
