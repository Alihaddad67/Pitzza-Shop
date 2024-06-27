

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WerbKorb } from './Components/WerbKorb/WerbKorb';
import { Home } from './Components/Home/Home';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { AuthProvider } from "./Components/Utils/AuthProvider.jsx";
import { ProtectedRoute } from "./Components/Utils/ProtectedRoute.jsx";
import { UnProtectedRoute } from "./Components/Utils/UnProtectedRoute.jsx";
import { Shop } from './Components/Shop/Shop.js';
import { ShopContextProvider } from './context/shopContext.js';
import { PublicLayout } from "./Components/Layout/PublicLayout.js";
import { PrivateLayout } from "./Components/Layout/privatlayout.js";
import { Home2 } from './Components/Home2/Home2.js'
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/home1" element={<Home />} />
                <Route path="/home2" element={<Home2 />} />
                <Route path="/" element={<UnProtectedRoute><LoginForm /></UnProtectedRoute>} />
              </Route>

              
              <Route element={<ProtectedRoute><PrivateLayout /></ProtectedRoute>}>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/werbkorb" element={<WerbKorb />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;