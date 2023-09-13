import React from "react";
import { Navigate, useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const CreateTask = () => {

    const auth = localStorage.getItem('token');

    const navigate = useNavigate();

    const initialValues = {
        title: '', description: '', status: ''
    }

    const [formValues, setFormValues] = React.useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (formValues.title.trim() === '' || formValues.description.trim() === '' || formValues.status.trim() === '') {
                toast.error('La tâche n\'a pas pu être ajoutée ! Veuillez vérifier vos champs.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            } else {
                const res = await fetch('http://localhost:3000/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': auth
                    },
                    body: JSON.stringify(formValues)
                })
                if (res.ok) {
                    // setTasks(prev => ([...prev, formValues]))
                    navigate('/')
                    toast.success('La tâche a été créée avec succès !', {
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

    return (
        auth ?
        <>
            <ToastContainer />
            <section>
                <h2>Ajouter une tâche</h2>
                <form className="form">
                    <div className="col">
                        <label className="form-label" htmlFor="title">Titre</label>
                        <input onChange={handleChange} className="form-input" type="text" name="title" placeholder="Titre" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea onChange={handleChange} className="form-input" type="text" name="description" placeholder="Description" cols="30" rows="10" required></textarea>
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="status">Status</label>
                        <select onChange={handleChange} className="form-input" name="status" defaultValue="">
                            <option value="" disabled>Choisir</option>
                            <option value="à faire">A faire</option>
                            <option value="fini">Fini</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} className="form-button" type="submit">Ajouter la tâche</button>
                </form>
            </section>
        </>
        : <Navigate to='/signin' />
    )
}