import { Navigate, useNavigate  } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();
    const auth = localStorage.getItem('token');

    return (
        auth ?
        <>
        </>
        : <Navigate to='/auth/signin' />
    )
}