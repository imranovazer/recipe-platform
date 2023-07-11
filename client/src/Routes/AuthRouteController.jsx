import { Navigate, Outlet } from "react-router";

function AuthController() {
    const isTrue = false
    if (isTrue) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}

export default AuthController;