import { Navigate } from "react-router-dom";
import React from 'react'
import MainLayout from "../Layout/MainLayout";
import Login from "../Page/Auth/Login";
import Register from "../Page/Auth/Register";
import AuthController from "./AuthRouteController";
import PrivatePageController from "./PrivateRouteController";
import Profile from "../Page/Profile";

export default function MainRoutes() {
  const Routes = [
    {
      element: <MainLayout />,
      path: '/',
      children: [
        {
          element: <AuthController />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            }
          ]
        },
        
        {
          element: <PrivatePageController />,
          children: [
            {
              path: "/profile",
              element: <Profile />,
            },
          ]
        },

      ],
    },
  ];

  return [...Routes];
}






  // {
        //   path: "event/:id",
        //   element: <EventDetail />,
        // },
        // {
        //   path: "favorites",
        //   element: <FavoritePage />
        // }