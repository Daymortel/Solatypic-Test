import React from "react";
import { Navigate, useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {

    const navigate = useNavigate();
    const auth = localStorage.getItem('token');

    const [tasks, setTasks] = React.useState([])

    const handleDelete = async (e, id) => {
        e.preventDefault()
        try {
            if (window.confirm('Supprimer ?')) {
                const res = await fetch(`http://localhost:3000/tasks/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'token': auth
                    }
                })
                if (res.ok) {
                    setTasks(prev => prev.filter(f => f.id !== id))
                    toast.success('La tâche a été supprimée avec succès !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const getTasks = async () => {
        try {
            const res = await fetch('http://localhost:3000/tasks', {
                method: 'GET',
                headers: {
                    'token': auth
                }
            })
            if (res.ok) {
                const data = await res.json()
                setTasks(data)
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    React.useEffect(() => {
        getTasks()
    }, [])

    return (
        auth ?
        <>
            <ToastContainer />
            <section>
                <h1>Tâches</h1>
                <button onClick={() => navigate('/tasks/create')} className="button-plus"><i className="bi bi-plus-lg"></i></button>
                <div>
                    {
                        tasks.map((t, i) =>
                            <form key={i}>
                                <div>
                                    <h3>{t.title}</h3>
                                    <p>{t.description}</p>
                                    <p>{t.created_at}</p>
                                    <p>{t.status}</p>
                                </div>
                                <button onClick={() => navigate(`/tasks/update/${t.id}`)}><i className="bi bi-pencil"></i></button>
                                <button onClick={(e) => handleDelete(e, t.id)}><i className="bi bi-trash"></i></button>
                            </form>
                        )
                    }
                </div>
                
            </section>
        </>
        : <Navigate to='/auth/signin' />
    )
}