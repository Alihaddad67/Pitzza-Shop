import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WerbKorb } from './views/WerbKorb/WerbKorb.js';
import { Home } from './views/Home/Home.js';
import { LoginForm } from './views/LoginForm/LoginForm.jsx';
import { AuthProvider } from "./utils/AuthProvider.jsx";
import { ProtectedRoute } from "./utils/ProtectedRoute.jsx";
import { UnProtectedRoute } from "./utils/UnProtectedRoute.jsx";
import { Shop } from './views/Shop/Shop.js';
import { ShopContextProvider } from './context/shopContext.js';
import { PublicLayout } from "./layout/PublicLayout.js";
import { PrivateLayout } from "./layout/privatlayout.js";
import { Home2 } from './views/Home2/Home2.js';
import { Home3 } from './views/Home3/Home3.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <div className="App">
      <ShopContextProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/home2" element={<Home2 />} />
                <Route path="/home3" element={<Home3 />} />
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
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
