import { Navigate } from "react-router-dom";
import React from 'react'
import MainLayout from "../Layout/MainLayout";

import AuthController from "./AuthRouteController";
import PrivatePageController from "./PrivateRouteController";
import Profile from "../Page/Profile";
import Home from "../Page/homePage/Home";
import Login from "../Page/Auth/login/Login";
import Register from "../Page/Auth/Register"
export default function MainRoutes() {
  const Routes = [
    {
      element: <MainLayout />,
      path: '/',
      children: [
        {
          path: "/",
          element: <Home />

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
    }, {
      element: <AuthController />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register/>,
        }
      ]
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