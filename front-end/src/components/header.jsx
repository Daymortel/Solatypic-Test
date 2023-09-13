import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate()
    const auth = localStorage.getItem('token')
    
    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        auth ?
        <>
            <button onClick={() => navigate('/')} className="button-header">Accueil</button>
            <button onClick={logout} className="button-header">Déconnexion</button>
            <button onClick={() => navigate('/tasks/create')} className="button-plus"><i className="bi bi-plus-lg"></i></button>
        </>
        :
        <>
            <button className="button-header"><a href="/auth/signin">Connexion</a></button>
        </>
    )
}