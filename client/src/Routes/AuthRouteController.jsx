import { Navigate, Outlet } from "react-router";

function AuthController() {
    const isTrue = JSON.parse(localStorage.getItem("token"))
    if (isTrue) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}

export default AuthController;