import ErrorBoundary from "./components/ErrorBoundary";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import DashboardPage from "./pages/DashboardPage";
import AddEditProductPage from "./pages/AddEditProductPage";
import { PrivateRoute, PublicRoute } from "./routes";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/details/:id" element={<ProductPage />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="/add-product" element={<PrivateRoute />}>
              <Route path="/add-product" element={<AddEditProductPage />} />
            </Route>
            <Route path="/edit-product/:id" element={<PrivateRoute />}>
              <Route path="/edit-product/:id" element={<AddEditProductPage />} />
            </Route>
            <Route path="/login" element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/register" element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </AuthProvider>
    </Router>
  );
}

export default App;