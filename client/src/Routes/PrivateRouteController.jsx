import { Navigate, Outlet } from "react-router";

function PrivatePageController() {
    const isTrue = false
    if (isTrue) {
        return <Outlet />;
    }
    return <Navigate to="/login" />;
}

export default PrivatePageController;