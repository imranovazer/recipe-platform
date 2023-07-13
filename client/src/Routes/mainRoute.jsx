import { Navigate } from "react-router-dom";
import React from 'react'
import MainLayout from "../Layout/MainLayout";
import Profile from "../Layout/ProfileLayout";
import AuthController from "./AuthRouteController";
import PrivatePageController from "./PrivateRouteController";
import Home from "../Page/homePage/Home";
import Login from "../Page/Auth/login/Login";
import Register from "../Page/Auth/register/Register"
import Follower from "../Components/Follower";
import Like from "../Components/Like";
import MyRecepies from "../Components/MyRecepies";
import AddRecepie from "../Components/AddRecepie";
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
              children: [
                {
                  path:'followers',
                  element: <Follower />
                },
                {
                  path:'like',
                  element: <Like />
                },
                {
                  path:'myrecepies',
                  element: <MyRecepies />
                },
                {
                  path:'addrecepies',
                  element: <AddRecepie />
                }
              ]
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
          element: <Register />,
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