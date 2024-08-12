

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WerbKorb } from './views/WerbKorb/WerbKorb.js';
import { Home } from './views/Home/Home.js';
import { LoginForm } from './views/LoginForm/LoginForm.jsx';
import { AuthProvider } from "./Utils/AuthProvider.jsx";
import { ProtectedRoute } from "./Utils/ProtectedRoute.jsx";
import { UnProtectedRoute } from "./Utils/UnProtectedRoute.jsx";
import { Shop } from './views/Shop/Shop.js';
import { ShopContextProvider } from './context/shopContext.js';
import { PublicLayout } from "./components/Layout/PublicLayout.js";
import { PrivateLayout } from "./components/Layout/privatlayout.js";
import { Home2 } from './views/Home2/Home2.js'
import { Home3 } from './views/Home3/Home3.js';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/home2" element={<Home2 />} />
                <Route path="/home3" element={<Home3/>} />
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