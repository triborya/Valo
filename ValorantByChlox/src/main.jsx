import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import WeaponsPage from "./pages/WeaponsPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ConnexionPage from "./pages/ConnexionPage.jsx";
import AcceuilPage from "./pages/PrincipalPage.jsx";
import AgentPage from "./pages/AgentPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "agents",
    element: <AgentPage />,
  },
  {
    path: "armes",
    element: <WeaponsPage />,
  },
  {
    path: "connexion",
    element: < ConnexionPage />,
  },
  {
    path: "inscription",
    element: <AuthPage />,
  },
  {
    path: "acceuil",
    element: <AcceuilPage />
  }
  //   {
  //     path :`/:persoId`,
  //     element : <App />
  //   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
