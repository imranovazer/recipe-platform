import { Navigate, Outlet } from "react-router";

function AuthController() {
    const isTrue = true
    if (isTrue) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}

export default AuthController;