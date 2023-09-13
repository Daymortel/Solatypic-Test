import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const Signup = () => {

    const captchaRef = useRef(null)
    const navigate = useNavigate()

    const initialValues = {
        username: '', password: ''
    }

    const [formValues, setFormValues] = React.useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (formValues.username.trim() === '' || formValues.password.trim() === '') {
                toast.error('Veuillez vérifier vos champs.', {
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
                const token = captchaRef.current.getValue()
                if (token) {
                    const res = await fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formValues),
                        secret: '6Le9Jo4gAAAAAPmXWVjMIgdhJbwamtOjraG2aDaM',
                    })
                    if (res.ok) {
                        // const data = await res.json()
                        navigate('/auth/signin')
                        toast.success('Compte créé avec succès !', {
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
                } else {
                    toast.error('Veuillez remplir le captcha.', {
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
            console.log(err.message)
        }
    }
    
    return (
        <>
            <ToastContainer />
            <section>
                <form className='form'>
                    <div className='col'>
                        <label className='form-label' htmlFor="username">Nom d'utilisateur</label>
                        <input onChange={handleChange} className='form-input' type="text" name="username" placeholder="Nom d'utilisateur" required />
                    </div>
                    <div className='col'>
                        <label className='form-label' htmlFor="password">Mot de passe</label>
                        <input onChange={handleChange} className='form-input' type="password" name="password" placeholder="Mot de passe" required />
                    </div>
                    <div>
                        <ReCAPTCHA
                            sitekey={'6Le9Jo4gAAAAAII1JPoquZk4Z7wF93GLOrrBZjr0'}
                            ref={captchaRef}
                        />
                    </div>
                    <button onClick={handleSubmit} className='form-button' type="submit">Inscription</button>
                </form>
            </section>
        </>
    )
}