export const Header = () => {

    const auth = localStorage.getItem('token')
    
    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        auth ?
        <>
            <button onClick={logout}>Déconnexion</button>
        </>
        :
        <>
            <button><a href="/auth/signin">Connexion</a></button>
        </>
    )
}