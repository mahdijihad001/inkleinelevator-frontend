import { Outlet } from "react-router-dom";

const ElevatorRouter = () => {
    // Replace this with your actual auth check logic
    // const isAdmin = localStorage.getItem('userRole') === 'admin';
    // const isAuthenticated = localStorage.getItem('token');

    // if (!isAuthenticated) {
    //   return <Navigate to="/login" replace />;
    // }

    // if (!isAdmin) {
    //   return <Navigate to="/" replace />;
    // }

    return <Outlet />;
};

export default ElevatorRouter