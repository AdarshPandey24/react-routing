import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";
import Products from "./components/pages/Products.jsx";
import Contact from "./components/pages/Contact.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
