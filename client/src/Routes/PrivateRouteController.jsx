import axios from "axios";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { axiosPrivate } from "../axios";

function PrivatePageController() {
    useEffect(()=>{
        axiosPrivate.get("http://localhost:8080/api/user/who-am-i")
        .then((res)=>console.log(res))
        .catch(err = console.log(err))
    },[])

    const isTrue = JSON.parse(localStorage.getItem("token"))
    if (isTrue) {
        return <Outlet />;
    }
    return <Navigate to="/login" />;
}

export default PrivatePageController;